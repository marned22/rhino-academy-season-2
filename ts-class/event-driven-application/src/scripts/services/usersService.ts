import { ApiError, BaseApiService } from './baseApiService'
import { v4 as uuidv4 } from "uuid";
import { UserCredentials } from "../models";
import { IChatUser } from "../models";

export class UserService extends BaseApiService{
    public getAll(): Promise<IChatUser[]> {
        return this.get<IChatUser[]>('/users');
    }
    public getById(id: string){
        return this.get<IChatUser>(`./users/${id}`)
        .then(user => {
            if(!user)
                throw new ApiError(404, 'User not fount')
            return user
        })
    }

    public register(credentials: UserCredentials): Promise<{ user: IChatUser; token: string}>{
        const newUser = { id: uuidv4(), ...credentials}
        return this.post<{user: IChatUser; token: string}>('/auth/register', newUser)
            .then(response => {
                if(!response.user) throw new ApiError(400, 'Registration failed')
                return response
            })
    }

    public login(credentials: UserCredentials): Promise<{ user: IChatUser; token: string}>{
        return this.post<{ user: IChatUser,  token: string}>('/auth/login', credentials)
            .then(response => {
                if(!response.user) throw new ApiError(401, 'Invalid username or password')
                return response
            })
    }
}