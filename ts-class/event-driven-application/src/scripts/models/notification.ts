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
    }

    sendNotification(notification: AppNotification){
        this.eventManager.dispatch('notification', notification)
    }

}


interface IbaseAppNotification{
    id: string
    timestamp: number
    message: string
}

class AppNotification implements IbaseAppNotification{
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