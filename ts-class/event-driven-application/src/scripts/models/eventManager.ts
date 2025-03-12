type Callback = () => void

type Events = {[key: string] : Callback[]}

interface IEventManager{
    subscribe(event: string, callBack: Callback): void
    dispatch(event: string, data): void
    unsubscribe(event: string, callBack: Callback): void
    unsubscribeAll(event: string): void
}

class EventManager implements IEventManager{
    private events: Events = {}
    private static instance: EventManager | null

    private constructor() {}

    static getEventManager(): EventManager{
        if(this.instance){
            const instance = new EventManager()
            EventManager.instance = instance
        }

        return EventManager.instance!;
    }



    subscribe(event: string, callBack: Callback): void {
        if(this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(callBack)
    }
    dispatch(event: string, data): void {
        if(this.events[event]){
            this.events[event].forEach(callBack => callBack())
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

export default EventManager