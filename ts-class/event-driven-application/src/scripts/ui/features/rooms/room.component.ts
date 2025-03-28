import { IChatRoom } from "../../../models";
import { BaseComponent } from "../../base/base.component";
import { RoomItemComponent } from "./room-item.component";

export class RoomsComponent extends BaseComponent{
    private rooms: IChatRoom[] = [
        {
            id: '1',
            name: 'Room 1'
        },
        {
            id: '2',
            name: 'Room 2'
        }
    ]

    constructor(parent: Element){
        super(parent)

        setTimeout(() => {
            this.renderRooms()
        }, 1000)
    }

    private renderRooms(){
        this.renderList<IChatRoom>(
            '#room-list',
            this.rooms,
            (room) => `room_id_${room.id}`,
            (element, item) => new RoomItemComponent(element, item)
        )
    }

    template(): string {
        return`
        <ul id="room-list"></ul>
        `
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
        return{}
    }
}