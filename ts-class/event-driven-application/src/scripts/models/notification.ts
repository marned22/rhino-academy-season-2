import { LogErrorNotification } from './decorators';
import { EventManager } from './eventManager'
import { v4 as uuidv4 } from 'uuid'

export class NotificationManager {
    private eventManager: EventManager

    constructor(eventManager: EventManager){
        this.eventManager = eventManager
        this.eventManager.subscribe('notification', (notification: AppNotification) => this.handleNotification(notification));
    }

    @LogErrorNotification
    public handleNotification(notification: AppNotification){
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

export class AppNotification implements IbaseAppNotification{
    id: string
    timestamp: number
    message: string
    type: 'success' | 'error' | 'warning'

    constructor(type: 'success' | 'error' | 'warning', message:string){
        this.type = type    
        this.message = message
        this.id = uuidv4()
        this.timestamp = Date.now()
    }


}