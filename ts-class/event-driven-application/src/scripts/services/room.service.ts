import { v4 as uuidv4 } from "uuid";
import { BaseApiService } from "./baseApiService";
import { IChatRoom } from "../models";

export class RoomService extends BaseApiService{
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
}