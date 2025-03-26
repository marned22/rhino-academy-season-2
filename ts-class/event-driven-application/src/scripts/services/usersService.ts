import { BaseApiService } from "./BaseApiService";
import { v4 as uuidv4 } from "uuid";
import { UserCredentials } from "../models";
import { IChatUser } from "../models";

class UserService extends BaseApiService{
    public getAll(): Promise<IChatUser[]> {
        return this.request<IChatUser[]>('/users');
    }
    public getById(id: string){
        return this.request<IChatUser[]>(`./users/{id}`)
    }

    public register(credentials: UserCredentials){
        
    }
}