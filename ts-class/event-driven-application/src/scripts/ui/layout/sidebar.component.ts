import { ChatManager } from "../../core";
import { RoomService } from "../../services";
import { BaseComponent } from "../base/base.component";
import { RoomsComponent } from "../features/rooms/room.component";
import { RoomCreationComponent } from "../features/rooms/room-creation.component";

export class SideBarComponent extends BaseComponent {
    private roomService: RoomService;
    private chatManager: ChatManager;

    constructor(parent: Element, chatManager: ChatManager, roomService: RoomService) {
        super(parent);

        this.roomService = roomService;
        this.chatManager = chatManager;

        this.registerChild(
            "#room-creation",
            (element) => new RoomCreationComponent(element, this.chatManager, this.roomService)
        );

        this.registerChild(
            "#room-list",
            (element) => new RoomsComponent(element, this.chatManager)
        );
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
      return{}
    }

    template(): string {
        return `
        <div id="sidebar-section">
          <div id="room-creation"></div>
          <div class="room-list">
            <ul id="room-list"></ul>
          </div>
        </div>
        `;
    }
}