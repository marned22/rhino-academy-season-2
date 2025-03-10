type Callback = () => void

type Events = {[key: string] : Callback[]}

interface IEventMenager{
    subscribe(event: string, callBack: Callback): void
    dispatch(event: string, data: string): void
    unsubscribe(event: string, callBack: Callback): void
    unsubscribeAll(event: string): void
}

class EventMenager implements IEventMenager{
    private events: Events = {}
    private static instance: EventMenager | null

    private constructor() {}

    static getEventMenager(): EventMenager{
        if(this.instance){
            const instance = new EventMenager()
            EventMenager.instance = instance
        }

        return EventMenager.instance!;
    }



    subscribe(event: string, callBack: Callback): void {
        if(this.events[event]){
            this.events[event] = []
        }
        this.events[event].push(callBack)
    }
    dispatch(event: string, data: string): void {
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