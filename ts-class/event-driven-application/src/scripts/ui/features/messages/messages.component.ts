import { IChatMessage } from "../../../models";
import { BaseComponent } from "../../base/base.component";
import { MessageItemComponent } from "./message-item.component";


export class MessagesComponent extends BaseComponent{
    private messages: IChatMessage[] = [
        {
            id: '1',
            roomId: '1',
            userId: '1',
            content: 'Hello',
            timestamp: Date.now(),
        },
        {
          id: '2',
          roomId: '2',
          userId: '2',
          content: 'Hi',
          timestamp: Date.now() 
        },
    ]
    constructor(parent: Element){
        super(parent)

        setTimeout(() => {
          this.renderMessages()
        }, 1000)
    }

    private renderMessages(){
      this.renderList<IChatMessage>(
        '#messages-container',
        this.messages,
        (message) => `message_id_${message.id}`,
        (element, item) => new MessageItemComponent(element, item)
      )
    }

    template(): string {
        return `
        <ul id="messages-container" class="messages-container"></ul>
        `
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
        return{}
    }
}