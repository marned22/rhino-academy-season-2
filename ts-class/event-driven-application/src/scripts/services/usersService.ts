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
        console.log('New user:', newUser)
        return this.post<{user: IChatUser; token: string}>('users', newUser)
            .then(response => {
                if(!response.user) throw new ApiError(400, 'Registration failed')
                return response
            })
    }

    async login(
        credentials: UserCredentials
      ): Promise<{ user: IChatUser; token: string }> {
        console.log(credentials)
        // json-server doesn't have built-in auth so we simulate it
        const users = await this.get<(IChatUser & { password: string })[]>(
          `users?name=${credentials.username}`
        );
        const user = users.find((u) => u.username === credentials.username);
    
        if (!user) {
          throw new Error("User not found");
        }
        return {
          user,
          token: "fake-jwt-token", // In real app, generate JWT
        };
      }
}