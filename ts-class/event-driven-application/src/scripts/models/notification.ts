import EventManager from "./eventManager"
import {v4 as uuidv4} from 'uuid'

class NotificationManager {
    constructor(eventManager: EventManager){
        this.eventManager = eventManager
        this.eventManager.subscribe('notification', this.handleNotification.bind(this))
    }
    private eventManager: EventManager

    private handleNotification(notification: AppNotification){
        if(notification.type === 'success'){
            console.log(`Success: ${notification.message}`)
        }
        if(notification.type === 'error'){
            console.log(`Error: ${notification.message}`)
        }
        if(notification.type === 'warning'){
            console.log(`Warning: ${notification.message}`)
        }
    }

    sendNotification(notification: AppNotification){
        this.eventManager.dispatch('notification', notification)
    }

}


interface IbaseAppNotification{
    id: string
    timestamp: number
    message: string
    type: 'success' | 'error' | 'warning'
}

class AppNotification implements IbaseAppNotification{
    id: string
    timestamp: number
    message: string
    type: 'success' | 'error' | 'warning'

    constructor(message:string, type: 'success' | 'error' | 'warning'){
        this.message = message
        this.type = type
        this.id = uuidv4()
        this.timestamp = Date.now()
    }


}