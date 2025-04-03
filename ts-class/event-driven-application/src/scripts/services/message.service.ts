import { IChatMessage } from "../models";
import { BaseApiService } from "./baseApiService";
import { v4 as uuidv4 } from "uuid";

export class MessageService extends BaseApiService{
    async getByRoomId(roomId: string): Promise<IChatMessage[]>{
        const messages = await this.get<IChatMessage[]>('/messages')
        return messages.filter(message => message.roomId === roomId)
    }

    async create(message: Omit<IChatMessage, 'id' | 'timestamp'>): Promise<IChatMessage>{
        const newMessage: IChatMessage = {
            id: uuidv4(),
            timestamp: Date.now(),
            ...message,
        }

        return this.post<IChatMessage>('/messsages', newMessage)
    }
}