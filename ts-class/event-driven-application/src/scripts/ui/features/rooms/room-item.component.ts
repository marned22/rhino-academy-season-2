import { ChatManager, EventManager } from "../../../core";
import { IChatEvents, IChatRoom } from "../../../models";
import { RoomService } from "../../../services";
import { BaseComponent } from "../../base/base.component";

export class RoomItemComponent extends BaseComponent {
  private roomService: RoomService
  private chatManager: ChatManager

  constructor(parent: Element, private room: IChatRoom, chatManager: ChatManager) {
    super(parent);

    this.roomService = new RoomService()
    this.chatManager = chatManager
  }

  template(): string {
    return `
    <li class="active">
        <div id="room-item-wrapper" class="room-item-wrapper active">
            <div class="room-info">
              <span class="room-name">${this.room.name}</span>
              <span class="room-count">5 users</span>
            </div>
            <button id="leave-room-btn" class="leave-room-btn" title="Leave Room">
            <span>x</span>
            </button>
        </div>
    </li>
        `;
  }

  getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
      return{
        '#leave-room-btn': {
              event: 'click',
              handler: this.handleLeaveRoom.bind(this)
            }
      }
  }

  private async handleLeaveRoom(){
      try {
        await this.roomService.deleteRoom(this.room.id)

        this.chatManager.leaveRoom(this.room.id)

        console.log(`Room ${this.room.name} has been left successfully`)
      } catch(error){
        console.error('Error leave room: ', error)
      }
    } 
}
