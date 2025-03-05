type CallBack = () => void

type Events = {name: string, value: () => []}

interface IEventMenager{
    subscribe(event: string, callBack: CallBack): void
    dispatch(event: string, data: string): void
    unsubscribe(event: string, callBack: CallBack): void
    unsubscribeAll(event: string): void
}

class EventMenager implements IEventMenager{
    private events: Events[]
    subscribe(event: string, callBack: CallBack): void {

    }
    dispatch(event: string, data: string): void {
        
    }
    unsubscribe(event: string, callBack: CallBack): void {
        
    }
    unsubscribeAll(event: string): void {
        
    }
}