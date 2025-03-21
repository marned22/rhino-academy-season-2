type Callback<T = any> = (data: T) => void

type Events<T extends string> = {
    [K in T]?: Callback<any>[]
} 

interface IEventManager<T extends string>{
    subscribe(event: T, callBack: Callback <any>): void
    dispatch(event: T, data: any): void
    unsubscribe(event: T, callBack: Callback<any>): void
    unsubscribeAll(event: T): void
}

export class EventManager<T extends string> implements IEventManager<T>{
    private events: Events<T> = {} as Events<T>
    private static instance: EventManager<any> | null

    private constructor() {}

    static getEventManager<T extends string>(): EventManager<T>{
        if(!this.instance){
            const instance = new EventManager<T>()
            EventManager.instance = instance
        }

        return EventManager.instance!;
    }



    subscribe(event: T, callBack: Callback): void {
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(callBack)
    }
    dispatch(event: T, data: any): void {
        if(this.events[event]){
            this.events[event].forEach(callBack => callBack(data))
        }
    }
    unsubscribe(event: T, callBack: Callback): void {
        if(this.events[event]){
            this.events[event] = this.events[event].filter(cb => cb !== callBack)
        }
    }
    unsubscribeAll(event: T): void {
        delete this.events[event]
    }
}