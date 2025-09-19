import { Callback, IEventManager} from "../models"

export class EventManager<T extends Record<string, any>> implements IEventManager<T>{
    private events: Map<keyof T, Callback<any>[]> = new Map()
    private static instance: EventManager<any> | null

    private constructor() {}

    static getEventManager<T extends Record<string, any>>(): EventManager<T>{
        if(!this.instance){
            const instance = new EventManager<T>()
            EventManager.instance = instance
        }

        return EventManager.instance!;
    }



    subscribe<K extends keyof T>(event: K, callBack: Callback<T[K]>): void {
        if(!this.events.get(event)){
            this.events.set(event, [])
        }
        this.events.get(event)!.push(callBack)
    }
    dispatch<K extends keyof T>(event: K, data: T[K]): void {
        if(this.events.get(event)){
            this.events.get(event)!.forEach(callBack => callBack(data))
        }
    }
    unsubscribe<K extends keyof T>(event: K, callBack: Callback<T[K]>): void {
        if(this.events.get(event)){
            this.events.set(event, this.events.get(event)!.filter(cb => cb !== callBack))
        }
    }
    unsubscribeAll<K extends keyof T>(event: K): void {
        this.events.delete(event)
    }
}