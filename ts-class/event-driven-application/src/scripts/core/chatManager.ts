import { v4 as uuidv4} from 'uuid'
import { IChatEvents, IChatMessage, IChatRoom, IChatUser } from '../models/types'
import { EventManager } from './eventManager'

export class ChatManager{
    private eventManager: EventManager<IChatEvents>
    private rooms: IChatRoom[] = []
    private currentRoomId: string | null

    constructor(eventManager: EventManager<IChatEvents>){
        this.eventManager = eventManager
        this.currentRoomId = null
    }

    private handleRoomJoined(data: { user: IChatUser, room: IChatRoom }){
        console.log(`User ${data.user.name} joined room ${data.room.name}`)
    }
    
    private handleRoomLeft(data: { user: IChatUser, room: IChatRoom }){
        console.log(`User ${data.user.name} left room ${data.room.name}`)
    }

    public initialize(){
        this.eventManager.roomJoined = (data) => this.handleRoomJoined(data)
        this.eventManager.roomLeft = (data) => this.handleRoomLeft(data)
    }
    
    public createRoom(name: string){
        const existingRoom = this.rooms.find(room => room.name === name)
        
        if(existingRoom){
            throw new Error(`Room ${name} already exists`)
        }

        const newRoom: IChatRoom = { id: uuidv4(), name}
        this.rooms.push(newRoom)
        this.eventManager.roomCreated(newRoom)
    }

    public joinRoom(roomId: string, user: IChatUser){
        const room = this.rooms.find(room => room.id === roomId)

        if(!room){
            throw new Error(`Room with ${roomId} was not found`)
        }

        this.currentRoomId = roomId
        this.eventManager.roomLeft({room, user})
    }

    public leaveRoom(roomId: string, user: IChatUser){
        const room = this.rooms.find(room => room.id === roomId)
        if(!room){
            throw new Error(`Room with ${roomId} was not found`)
        }

        this.currentRoomId = null
        this.eventManager.roomLeft({ room, user})
    }

    public sendMessage(user: IChatUser, content: string){
        if(!this.currentRoomId){
            throw new Error('No room currently joined')
        }

        const message: IChatMessage = {
            id: uuidv4(),
            roomId: this.currentRoomId,
            userId: user.id,
            content,
            timestamp: Date.now()
        }
        this.eventManager.messageSent(message)
    }
}