import { LogData } from "../models/types"

export class LoggerService{
    static logError(data: LogData): void{
        const timestampPart = data.context.timestamp ? `[${data.context.timestamp}]` : ''
        console.error(`[LoggerService] - ${timestampPart}: ${JSON.stringify(data)}`)
    }
}

