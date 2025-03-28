import { IChatRoom } from "../../../models";
import { BaseComponent } from "../../base/base.component";

export class RoomItemComponent extends BaseComponent {
  constructor(parent: Element, private room: IChatRoom) {
    super(parent);
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
              handler: this.handleLeaveRoom
            }
      }
  }

  private handleLeaveRoom(){
    console.log('You leave the room')
  } 
}
