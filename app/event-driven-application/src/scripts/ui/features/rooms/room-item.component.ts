import { ChatManager } from "../../../core";
import { IChatRoom } from "../../../models";
import { RoomService } from "../../../services";
import { BaseComponent } from "../../base/base.component";

export class RoomItemComponent extends BaseComponent {
  private roomService: RoomService;
  private chatManager: ChatManager;

  constructor(parent: Element, private room: IChatRoom, chatManager: ChatManager) {
    super(parent);

    this.roomService = new RoomService();
    this.chatManager = chatManager;
  }

  private async updateRoomUserCount() {
    const users = await this.chatManager.getUsersInRoom(this.room.id);
    const userCountElement = this.parent.querySelector(".room-count");
    if (userCountElement) {
      userCountElement.textContent = `${users.length} users`;
    }
  }

  template(): string {
    return `
    <li class="active">
        <div id="room-item-wrapper" class="room-item-wrapper active">
            <div class="room-info">
              <span class="room-name">${this.room.name}</span>
              <span class="room-count">Loading...</span>
            </div>
            <button id="leave-room-btn" class="leave-room-btn" title="Leave Room">
            <span>x</span>
            </button>
        </div>
    </li>
    `;
  }

  render(): void {
    super.render();
    this.updateRoomUserCount();
  }

  getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void } } {
    return {
      "#leave-room-btn": {
        event: "click",
        handler: this.handleLeaveRoom.bind(this),
      },
      "#room-item-wrapper": {
        event: "click",
        handler: this.handleJoinRoom.bind(this),
      },
    };
  }

  private async handleLeaveRoom() {
    try {
      await this.roomService.deleteRoom(this.room.id);
      this.chatManager.leaveRoom(this.room.id);
      console.log(`Room ${this.room.name} has been left successfully`);
    } catch (error) {
      console.error("Error leaving room: ", error);
    } finally {
      this.parent.remove();
    }
  }

  private async handleJoinRoom() {
    try {
        console.log("Joining room with ID:", this.room.id);
      
        await this.chatManager.joinRoom(this.room.id);
        console.log(`Joined room: ${this.room.name}`);

        const currentUserId = this.chatManager.getCurrentUser()?.id;
        if (!currentUserId) {
            throw new Error("No current user available");
        }

        await this.chatManager.addUserToRoom(this.room.id, currentUserId);

        console.log(`User ${currentUserId} added to room ${this.room.id}`);

        this.updateRoomUserCount();

    } catch (error) {
        console.error("Error joining room: ", error);
    }
  }
}
