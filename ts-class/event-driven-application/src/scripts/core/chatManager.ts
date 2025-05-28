import { v4 as uuidv4} from 'uuid'
import { Callback, IChatEvents, IChatMessage, IChatRoom, IChatUser } from '../models/types'
import { EventManager } from './eventManager'
import { SocketService, RoomService, MessageService } from '../services'
import { AuthService } from '../services'

export class ChatManager{
    eventManager: EventManager<IChatEvents>
    private rooms: IChatRoom[] = []
    private currentRoomId: string | null
    private socketService: SocketService
    private currentUser: { id: string, name: string} | null
    private roomService: RoomService
    private roomUsers: { roomId: string; userId: string }[] = [];
    private messages: IChatMessage[] = [];
    private messageService: MessageService

    constructor(eventManager: EventManager<IChatEvents>, authService: AuthService) {
        this.eventManager = eventManager;
        this.currentRoomId = null;
        this.socketService = new SocketService(eventManager);
        this.roomService = new RoomService();
        this.messageService = new MessageService();

        // Set the current user from the AuthService
        const user = authService.getCurrentUser();
        if (user) {
            this.currentUser = { id: user.id, name: user.username || 'Unknown User' };
        } else {
            console.warn('No logged-in user found. ChatManager will operate in unauthenticated mode.');
            this.currentUser = null; 
        }
    }

    private handleRoomJoined = (data: { user: IChatUser, room: IChatRoom }): void => {
        console.log(`User ${data.user.name} joined room ${data.room.name}`)
    }
    
    private handleRoomLeft = (data: { user: IChatUser, room: IChatRoom }): void => {
        console.log(`User ${data.user.name} left room ${data.room.name}`)
    }

    public async initialize() {
        this.eventManager.subscribe('roomJoined', this.handleRoomJoined);
        this.eventManager.subscribe('roomLeft', this.handleRoomLeft);

        try {
            const rooms = await this.roomService.getAll();
            this.rooms = rooms; 
            console.log('Rooms fetched from backend:', this.rooms);
        } catch (error) {
            console.error('Failed to fetch rooms:', error);
        }
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
        this.socketService.dispatchRoomJoined(newRoom.id, this.currentUser?.id || '')
    }

    public async joinRoom(roomId: string) {
        const room = this.rooms.find((room) => room.id === roomId);
        if (!room) {
            throw new Error(`Room with ID ${roomId} not found`);
        }

        this.setCurrentRoomId(roomId);

        try {

            const messages = await this.messageService.getByRoomId(roomId);
            this.messages = messages;
            console.log('Fetched messages:', this.messages);

            if (this.currentUser) {
                this.eventManager.dispatch('roomJoined', { user: this.currentUser, room });
            } else {
                console.error('Cannot dispatch roomJoined event: currentUser is null');
            }
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        }
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

        this.eventManager.dispatch('roomLeft', { user: this.currentUser, room})

        this.socketService.dispatchLeaveRoom(roomId, this.currentUser.id)
    }

    public async sendMessage(content: string) {
        const roomId = this.getCurrentRoomId();
        if (!roomId) {
            console.error('No room joined');
            return;
        }

        const newMessage: Omit<IChatMessage, 'id' | 'timestamp'> = {
            roomId,
            userId: this.currentUser?.id || '', 
            userName: this.currentUser?.name || 'Unknown User',
            content,
    
        };

        try {
            const savedMessage = await this.messageService.create(newMessage);
            this.messages.push(savedMessage);
            console.log('Updated messages:', this.messages);
            this.eventManager.dispatch('messageSent', savedMessage);
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    }

    public async addUserToRoom(roomId: string, userId: string): Promise<void> {
        try {
            // Persist the user-room association to the backend
            await this.roomService.addUserToRoom(roomId, userId);

            // Simulate adding the user to the room locally
            this.roomUsers.push({ roomId, userId });
            console.log('Updated roomUsers:', this.roomUsers);
        } catch (error) {
            console.error('Failed to add user to room:', error);
        }
    }

    public async getUsersInRoom(roomId: string): Promise<IChatUser[]> {
        return await this.roomService.getUsersInRoom(roomId);
    }

    public setCurrentRoomId(roomId: string) {
        this.currentRoomId = roomId;
        localStorage.setItem('currentRoomId', roomId); // Persist roomId
    }

    public getCurrentRoomId(): string | null {
        if (!this.currentRoomId) {
            this.currentRoomId = localStorage.getItem('currentRoomId'); // Restore roomId
        }
        return this.currentRoomId;
    }

    public getCurrentUser(): { id: string; name: string } | null {
        return this.currentUser;
    }
}