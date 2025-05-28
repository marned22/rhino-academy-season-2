import { ChatManager } from "../../../core";
import { IChatRoom } from "../../../models";
import { RoomService } from "../../../services";
import { BaseComponent } from "../../base/base.component";
import { RoomItemComponent } from "./room-item.component";

export class RoomsComponent extends BaseComponent{
    private rooms: IChatRoom[] = []
    private roomService: RoomService
    private chatManager: ChatManager

    constructor(parent: Element, chatManager: ChatManager){
         super(parent);
        this.roomService = new RoomService();
        this.chatManager = chatManager;

        this.loadRooms();

        const sidebarSection = document.getElementById("sidebar-section");
        if (sidebarSection) {
            sidebarSection.addEventListener("roomCreated", (event) => {
                const customEvent = event as CustomEvent<IChatRoom>;
                const newRoom = customEvent.detail;
                this.rooms.push(newRoom);
                this.renderRooms();
            });
        }

        this.chatManager.subscribe("roomLeft", (data) => {
            this.rooms = this.rooms.filter((room) => room.id !== data.room.id);
            this.renderRooms();
        });
    }

    private async loadRooms(){
        try {
            this.rooms = await this.roomService.getAll()
            this.renderRooms()
        } catch(error){
            console.error('Error loading rooms: ', error)
        }
    }

    private renderRooms() {
        this.renderList<IChatRoom>(
            '#room-list',
            this.rooms,
            (room) => `room_id_${room.id}`,
            (element, item) => new RoomItemComponent(element, item, this.chatManager)
        );
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