import { v4 as uuidv4 } from "uuid";
import { BaseApiService } from "./BaseApiService";
import { IChatRoom, IChatUser } from "../models";

export class RoomService extends BaseApiService{
    private roomUsers: { roomId: string; userId: string }[] = [];

    async getAll(): Promise<IChatRoom[]>{
        return this.get<IChatRoom[]>('/rooms')
    }

    async getById(id: string){
        return this.get<IChatRoom>(`/rooms/${id}`)
    }

    async create(room: Omit<IChatRoom, 'id'>): Promise<IChatRoom> {
        const newRoom: IChatRoom = { id: uuidv4(), ...room}
        return this.post<IChatRoom>('/rooms', newRoom)
    }

    async deleteRoom(id: string): Promise<IChatRoom> {
        return this.delete<IChatRoom>(`/rooms/${id}`)
    }

    public async addUserToRoom(roomId: string, userId: string): Promise<void> {
        try {
            await this.post('/roomUsers', { roomId, userId });

            this.roomUsers.push({ roomId, userId });
            console.log('Updated roomUsers:', this.roomUsers);
        } catch (error) {
            console.error('Failed to add user to room:', error);
        }
    }

    async getUsersInRoom(roomId: string): Promise<IChatUser[]> {
        const roomUsers = await this.get<{ roomId: string; userId: string }[]>('/roomUsers');
        const userIds = roomUsers.filter((ru) => ru.roomId === roomId).map((ru) => ru.userId);

        const users = await this.get<IChatUser[]>('/users');
        return users.filter((user) => userIds.includes(user.id));
    }
}