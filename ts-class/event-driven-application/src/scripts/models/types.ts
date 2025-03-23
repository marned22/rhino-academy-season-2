import { AppNotification } from "../core"

type Callback<T = any> = (data: T) => void

interface IEventManager<T extends Record<string, any>>{
    subscribe<K extends keyof T>(event: K, callBack: Callback <any>): void
    dispatch<K extends keyof T>(event: K, data: any): void
    unsubscribe<K extends keyof T>(event: K, callBack: Callback<any>): void
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
    roomJoined(data: {user: IChatUser, room: IChatRoom}): void
    roomLeft(data: {user: IChatUser, room: IChatRoom}): void
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

export { IChatRoom, IChatEvents, IChatMessage, IChatUser, Callback, IEventManager, LogData, IbaseAppNotification , INotificationEvents}