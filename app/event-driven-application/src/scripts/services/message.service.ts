import { IChatMessage } from "../models";
import { BaseApiService } from "./BaseApiService";
import { v4 as uuidv4 } from "uuid";

export class MessageService extends BaseApiService {
    public getAll(): Promise<IChatMessage[]> {
        return this.get<IChatMessage[]>('/messages');
    }

    public getByRoomId(roomId: string): Promise<IChatMessage[]> {
        return this.get<IChatMessage[]>(`/messages?roomId=${roomId}`);
    }

    public getById(id: string): Promise<IChatMessage> {
        return this.get<IChatMessage>(`/messages/${id}`)
            .then(message => {
                if (!message)
                    throw new Error('Message not found');
                return message;
            });
    }

    public create(message: IChatMessage): Promise<IChatMessage> {
        return this.post<IChatMessage>('/messages', message);
    }

    public update(id: string, message: Partial<IChatMessage>): Promise<IChatMessage> {
        return this.put<IChatMessage>(`/messages/${id}`, message);
    }
}