import { ApiError, BaseApiService } from './BaseApiService'
import { v4 as uuidv4 } from "uuid";
import { UserCredentials } from "../models";
import { IChatUser } from "../models";

export class UserService extends BaseApiService{
    public getAll(): Promise<IChatUser[]> {
        return this.get<IChatUser[]>('/users');
    }
    public getById(id: string){
        return this.get<IChatUser>(`/users/${id}`)
        .then(user => {
            if(!user)
                throw new ApiError(404, 'User not found')
            return user
        })
    }

    public register(credentials: UserCredentials): Promise<{ user: IChatUser; token: string }> {
        const newUser = { id: uuidv4(), ...credentials };
        console.log('New user:', newUser);
        return this.post<{ user: IChatUser; token: string }>('/users', newUser)
            .then(user => {
                if (!user) throw new ApiError(400, 'Registration failed');
                return {
                    user: (user as unknown) as IChatUser,
                    token: "fake-jwt-token" 
                };
            });
    }

    async login(
        credentials: UserCredentials
      ): Promise<{ user: IChatUser; token: string }> {
        console.log(credentials)
        const users = await this.get<(IChatUser & { password: string })[]>
          (`users?username=${credentials.username}`
        );
        const user = users.find((u) => u.username === credentials.username);
    
        if (!user) {
          throw new Error("User not found");
        }
        return {
          user,
          token: "fake-jwt-token",
        };
      }
}