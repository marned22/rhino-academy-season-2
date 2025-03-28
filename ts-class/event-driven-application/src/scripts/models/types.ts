import { AppNotification } from "../core" 
import { BaseComponent } from "../ui/base/base.component"

type ChildFactoryFn = (element: Element) => BaseComponent

type Callback<T = any> = (data: T) => void

interface IEventManager<T extends Record<string, any>>{
    subscribe<K extends keyof T>(event: K, callBack: Callback <T[K]>): void
    dispatch<K extends keyof T>(event: K, data: T[K]): void
    unsubscribe<K extends keyof T>(event: K, callBack: Callback<T[K]>): void
    unsubscribeAll<K extends keyof T>(event: K): void
}


type LogData = {
    message: string
    context: {
        class: string
        method : string
        timestamp: string
        notification: string
    }
}

interface IChatRoom{
    id: string
    name: string
}

interface IChatMessage{
    id: string
    roomId: string
    userId: string
    content: string
    timestamp: number
}

interface IChatUser{
    id: number
    name: string
}

interface IChatEvents{
    roomCreated(room: IChatRoom): void
    roomJoined:{user: IChatUser, room: IChatRoom}
    roomLeft:{user: IChatUser, room: IChatRoom}
    messageSent(message: IChatMessage): void
}

interface IbaseAppNotification{
    id: string
    timestamp: number
    message: string
}

interface INotificationEvents{
    notification: AppNotification
}


interface UserCredentials{
    username: string
    password: string
}

interface AuthEvents {
    login: IChatUser
    logout: void;
}

export { 
    IChatRoom, 
    IChatEvents, 
    IChatMessage, 
    IChatUser, 
    Callback, 
    IEventManager, 
    LogData, 
    IbaseAppNotification , 
    INotificationEvents, 
    ChildFactoryFn,
    UserCredentials,
    AuthEvents
}