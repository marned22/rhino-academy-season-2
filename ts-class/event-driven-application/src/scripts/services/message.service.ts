import { IChatMessage } from "../models";
import { BaseApiService } from "./baseApiService";
import { v4 as uuidv4 } from "uuid";

export class MessageService extends BaseApiService{
    async getByRoomId(roomId: string): Promise<IChatMessage[]> {
        const messages = await this.get<IChatMessage[]>(`/messages?roomId=${roomId}`);
        return messages;
    }

    async create(message: Omit<IChatMessage, 'id' | 'timestamp'>): Promise<IChatMessage> {
        const newMessage: IChatMessage = {
            id: uuidv4(),
            timestamp: Date.now(),
            ...message,
        };

        const savedMessage = await this.post<IChatMessage>('/messages', newMessage);
        return savedMessage;
    }
}