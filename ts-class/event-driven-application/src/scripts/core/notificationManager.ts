import { LogErrorNotification } from '../utils';
import { EventManager } from './eventManager';
import { IbaseAppNotification, INotificationEvents } from '../models/types';
import { v4 as uuidv4 } from 'uuid'

export class NotificationManager {
    private eventManager: EventManager<INotificationEvents>

    constructor(eventManager: EventManager<INotificationEvents>){
        this.eventManager = eventManager
        this.eventManager.subscribe('notification', (notification: AppNotification) => this.handleNotification(notification));
    }

    @LogErrorNotification(true)
    public handleNotification(notification: AppNotification){
        if(notification instanceof displayError){
            console.log(`Error: ${notification.message}`)
        }else if(notification instanceof displaySuccess){
            console.log(`Success ${notification.message}`)
        }else if(notification instanceof displayWarning){
            console.log(`Warning: ${notification.message}`)
        }
    }

    sendNotification(notification: AppNotification){
        this.eventManager.dispatch('notification', notification)
    }

}

export class AppNotification implements IbaseAppNotification{
    id: string
    timestamp: number
    message: string

    constructor(message:string){
        this.message = message
        this.id = uuidv4()
        this.timestamp = Date.now()
    }
}

export class displaySuccess extends AppNotification{
    constructor(message: string){
        super(message)
        console.log(`success: ${this.message}`)
    }
}

export class displayError extends AppNotification{
    constructor(message: string){
        super(message)
        console.log(`error: ${this.message}`)
    }
}

export class displayWarning extends AppNotification{
    constructor(message: string){
        super(message)
        console.log(`success: ${this.message}`)
    }
}