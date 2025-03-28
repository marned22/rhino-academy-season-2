import { BaseComponent } from "../base/base.component";
import { RoomsComponent } from "../features/rooms/room.component";

export class SideBarComponent extends BaseComponent{
    constructor(parent: Element){
        super(parent)

        this.registerChild(
            '#room-list',
            (element) => new RoomsComponent(element)
          )
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
        return {
            '#create-room-btn': {
                event: 'click',
                handler: this.handleCreateRoom
            }
        }
    }

    private handleCreateRoom(){
      console.log('Room Created')     
    }

    template(): string {
        return `
        <div id="sidebar-section">
          <div class="room-creation">
            <div class="room-creation component-btb6704r2">
              <input type="text" id="room-name" placeholder="Enter room name...">
              <button id="create-room-btn">Create</button>
            </div>
          </div>
          <div class="room-list">
            <ul id="room-list"></ul>
          </div>
        </div>
        `
    }
}