import { LoggerService } from '../services/index'
import { LogData } from "../models/types";
import { AppNotification } from "../core/notificationManager";

export function LogErrorNotification(includeTimeStamp: boolean = false){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value
    
        descriptor.value = function(...args: any[]){
            const notification: AppNotification = args[0]
                const logData: LogData = {
                    message: notification.message,
                    context: {
                        class: target.constructor.name,
                        method: propertyKey,
                        timestamp:includeTimeStamp ? new Date().toString(): '',
                        notification: notification.id,
                    },
            }
            LoggerService.logError(logData)

            return originalMethod.apply(this, args)
        }
    
        return descriptor
    }
}
