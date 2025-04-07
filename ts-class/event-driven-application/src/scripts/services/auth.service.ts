import { EventManager } from "../core";
import { IChatUser, UserCredentials, AuthEvents } from "../models";
import { UserService } from "./usersService";

export class AuthService {
    private static instance: AuthService
    private currentUser!: IChatUser | null
    private authToken!: string | null
    private userService: UserService
    private eventManager: EventManager<AuthEvents>

    constructor(eventManager: EventManager<AuthEvents>){
        this.eventManager = eventManager;
        this.userService = new UserService();

        const isFirstStart = localStorage.getItem('firstStart') === null;
        if (isFirstStart) {
            localStorage.removeItem('authUser');
            localStorage.removeItem('authToken');
            localStorage.setItem('firstStart', 'false');
        }

        this.loadUserFromStorage();
    }

    static getInstance(): AuthService {
        if(!AuthService.instance){
            AuthService.instance = new AuthService(EventManager.getEventManager<AuthEvents>())
        }
        return AuthService.instance
    }

    private loadUserFromStorage(): void{
        const userData = localStorage.getItem('authUser')
        const token = localStorage.getItem('authToken')


        if(userData && token){
            this.currentUser = JSON.parse(userData)
            this.authToken = token
            if (this.currentUser) {
                this.eventManager.dispatch('login', this.currentUser)
            }
        } else {
            this.currentUser = null
            this.authToken = null
        }
    }

    private saveUserToStorage(): void{
        if(this.currentUser && this.authToken){
            localStorage.setItem('authUser', JSON.stringify(this.currentUser))
            localStorage.setItem('authToken', this.authToken)
        }
    }

    async register(credentials: UserCredentials): Promise<IChatUser> {
        await this.userService.register(credentials)
        const result = await this.login(credentials)
        return result
    }

    async login(credentials: UserCredentials): Promise<IChatUser>{
        try {
            const response = await this.userService.login(credentials);
            this.currentUser = response.user;
            this.authToken = response.token;
            this.saveUserToStorage();
            this.eventManager.dispatch('login', this.currentUser); // Dispatch login event
            return response.user;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    logout(): void {
        this.currentUser = null;
        this.authToken = null;
        localStorage.removeItem('authUser');
        localStorage.removeItem('authToken');
        this.eventManager.dispatch('logout', undefined); // Dispatch logout event
    }

    getCurrentUser(): IChatUser | null {
        return this.currentUser
    }

    isAuthenticated(): boolean{
        return this.currentUser !== null && this.authToken !== null
    }

    getAuthToken(): string | null {
        return this.authToken
    }
}