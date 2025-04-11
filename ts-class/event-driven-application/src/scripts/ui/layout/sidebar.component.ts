import { ChatManager } from "../../core";
import { RoomService } from "../../services";
import { BaseComponent } from "../base/base.component";
import { RoomsComponent } from "../features/rooms/room.component";

export class SideBarComponent extends BaseComponent{
    private roomService: RoomService
    private chatManager: ChatManager


    constructor(parent: Element, chatManager: ChatManager){
        super(parent)

        this.roomService = new RoomService()
        this.chatManager = chatManager

        this.registerChild(
            '#room-list',
            (element) => new RoomsComponent(element, this.chatManager)
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

    private async handleCreateRoom(){
    const roomNameInput = document.querySelector<HTMLInputElement>('#room-name')
        if(roomNameInput && roomNameInput.value !== '') {
          const roomName = roomNameInput.value
          try{
            const newRoom = await this.roomService.create({ name: roomName})
            console.log('Room created', newRoom);
            
            roomNameInput.value = ''
            this.render
          } catch (error){
            console.log('Eror creating room: ', error)
          }
        }
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