import { EventManager } from "../core";
import { IChatUser, UserCredentials, AuthEvents } from "../models";
import { UserService } from "./usersService";

class AuthService {
    private static instance: AuthService
    private currentUser!: IChatUser | null
    private authToken!: string | null
    private userService: UserService
    private eventManager: EventManager<AuthEvents>

    constructor(eventManager: EventManager<AuthEvents>){
        this.eventManager = eventManager
        this.userService = new UserService()
        this.loadUserFromStorage()
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
        }
    }

    private saveUserToStorage(): void{
        if(this.currentUser && this.authToken){
            localStorage.setItem('authUser', JSON.stringify(this.currentUser))
            localStorage.setItem('authToken', this.authToken)
        }
    }

    async login(credentials: UserCredentials): Promise<void>{
        try{
            const response = await this.userService.login(credentials)
            this.currentUser = response.user
            this.authToken = response.token
            this.saveUserToStorage()
            this.eventManager.dispatch('login', this.currentUser)
        } catch(error){
            console.error('Login failed:', error)
            throw error
        }
    }

    logout(){
        this.currentUser = null
        this.authToken = null
        localStorage.removeItem('authUser')
        localStorage.removeItem('authToken')
        this.eventManager.dispatch('logout', undefined)
    }

    getCurrentUser(): IChatUser | null {
        return this.currentUser
    }

    isAuthenticated(): boolean{
        return this.currentUser !== null
    }

    getAuthToken(): string | null {
        return this.authToken
    }
}