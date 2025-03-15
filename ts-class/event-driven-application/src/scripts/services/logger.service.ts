export type LogData = {
    message: string
    context: {
        class: string
        method : string
        timestamp: string
        notification: string
    }
}

export class LoggerService{
    static logError(data: LogData): void{
        console.error(`[LoggerService] - ${data.context.timestamp}: ${data}`)
    }
}

