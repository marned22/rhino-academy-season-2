import { v4 as uuidv4} from 'uuid'
import { Callback, IChatEvents, IChatMessage, IChatRoom, IChatUser } from '../models/types'
import { EventManager } from './eventManager'
import { SocketService } from '../services'

export class ChatManager{
    private eventManager: EventManager<IChatEvents>
    private rooms: IChatRoom[] = []
    private currentRoomId: string | null
    private socketService: SocketService
    private currentUser: { id: string, name: string}

    constructor(eventManager: EventManager<IChatEvents>){
        this.eventManager = eventManager
        this.currentRoomId = null
        this.socketService = new SocketService(eventManager)
        this.currentUser = { id: 'default', name: 'default'}
    }

    private handleRoomJoined = (data: { user: IChatUser, room: IChatRoom }): void => {
        console.log(`User ${data.user.name} joined room ${data.room.name}`)
    }
    
    private handleRoomLeft = (data: { user: IChatUser, room: IChatRoom }): void => {
        console.log(`User ${data.user.name} left room ${data.room.name}`)
    }

    public initialize(){
        this.eventManager.subscribe('roomJoined', (data) => this.handleRoomJoined(data))
        this.eventManager.subscribe('roomLeft', (data) => this.handleRoomLeft(data))
    }

    public subscribe<K extends keyof IChatEvents>(event: K, handler: (data: IChatEvents[K]) => void): void{
        if(!this.eventManager){
            throw new Error('Event manager is not initialized')
        }

        this.eventManager.subscribe(event, handler)
    }
    
    public createRoom(name: string){
        const existingRoom = this.rooms.find(room => room.name === name)
        
        if(existingRoom){
            throw new Error(`Room ${name} already exists`)
        }

        const newRoom: IChatRoom = { id: uuidv4(), name}
        this.rooms.push(newRoom)
        this.socketService.dispatchRoomJoined(newRoom.id, this.currentUser.id)
    }

    public joinRoom(roomId: string){
        const room = this.rooms.find(room => room.id === roomId)

        if(!room){
            throw new Error(`Room with ${roomId} was not found`)
        }

        this.currentRoomId = roomId
        this.socketService.dispatchRoomJoined(roomId, this.currentUser.id)
    }

    public leaveRoom(roomId: string){
        const room = this.rooms.find(room => room.id === roomId)
        if(!room){
            throw new Error(`Room with ${roomId} was not found`)
        }

        if(!this.currentUser){
            throw new Error('No current user available')
        }

        this.currentRoomId = null
        this.socketService.dispatchLeaveRoom(roomId, this.currentUser.id)
    }

    public sendMessage(content: string){
        if(!this.currentRoomId){
            throw new Error('No room currently joined')
        }

        if(!this.currentUser){
            throw new Error('No current user available')
        }

        const message: IChatMessage = {
            id: uuidv4(),
            roomId: this.currentRoomId,
            userId: this.currentUser.id,
            content,
            timestamp: Date.now()
        }
        this.socketService.dispatchMessageSent(message)
    }
}