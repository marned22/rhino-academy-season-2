type Callback = (data: any) => void

type Events = {[key: string] : Callback[]}

interface IEventManager{
    subscribe(event: string, callBack: Callback): void
    dispatch(event: string, data: any): void
    unsubscribe(event: string, callBack: Callback): void
    unsubscribeAll(event: string): void
}

export class EventManager implements IEventManager{
    private events: Events = {}
    private static instance: EventManager | null

    private constructor() {}

    static getEventManager(): EventManager{
        if(!this.instance){
            const instance = new EventManager()
            EventManager.instance = instance
        }

        return EventManager.instance!;
    }



    subscribe(event: string, callBack: Callback): void {
        if(!this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(callBack)
    }
    dispatch(event: string, data: any): void {
        if(this.events[event]){
            this.events[event].forEach(callBack => callBack(data))
        }
    }
    unsubscribe(event: string, callBack: Callback): void {
        if(this.events[event]){
            this.events[event] = this.events[event].filter(cb => cb !== callBack)
        }
    }
    unsubscribeAll(event: string): void {
        delete this.events[event]
    }
}