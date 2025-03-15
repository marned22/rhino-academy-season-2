import { LogData, LoggerService } from "../services/logger.service";
import { AppNotification } from "./notification";

export function LogErrorNotification(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value

    descriptor.value = function(...args: any[]){
        const notification: AppNotification = args[0]

        if(notification.type === 'error'){
            const logData: LogData = {
                message: notification.message,
                context: {
                    class: target.constructor.name,
                    method: propertyKey,
                    timestamp: new Date().toString(),
                    notification: notification.id,
                },
            }
            LoggerService.logError(logData)
        }
        return originalMethod.apply(this, args)
    }

    return descriptor
}