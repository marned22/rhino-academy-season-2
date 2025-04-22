import { ChatManager } from "../../../core";
import { RoomService } from "../../../services";
import { BaseComponent } from "../../base/base.component";

export class RoomCreationComponent extends BaseComponent {
    private chatManager: ChatManager;
    private roomService: RoomService;

    constructor(parent: Element, chatManager: ChatManager, roomService: RoomService) {
        super(parent);
        this.chatManager = chatManager;
        this.roomService = roomService;
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void } } {
        return {
            "#create-room-btn": {
                event: "click",
                handler: this.handleCreateRoom.bind(this),
            },
        };
    }

    private async handleCreateRoom() {
        const roomNameInput = this.parent.querySelector<HTMLInputElement>("#room-name");
        if (roomNameInput && roomNameInput.value !== "") {
            const roomName = roomNameInput.value;
            try {
                const newRoom = await this.roomService.create({ name: roomName });
                this.chatManager.createRoom(newRoom.name);
                console.log("Room created", newRoom);

                // Dispatch the event on the closest common parent (e.g., #sidebar-section)
                const sidebarSection = document.getElementById("sidebar-section");
                if (sidebarSection) {
                    const event = new CustomEvent("roomCreated", { detail: newRoom });
                    sidebarSection.dispatchEvent(event);
                }

                roomNameInput.value = ""; // Clear the input field
            } catch (error) {
                console.log("Error creating room: ", error);
            }
        }
    }

    template(): string {
        return `
        <div class="room-creation">
          <input type="text" id="room-name" placeholder="Enter room name...">
          <button id="create-room-btn">Create</button>
        </div>
        `;
    }
}