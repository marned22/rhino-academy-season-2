import { IChatMessage } from "../../../models";
import { BaseComponent } from "../../base/base.component";


export class MessageItemComponent extends BaseComponent{
    constructor(parent: Element, private message: IChatMessage){
        super(parent)
    }

    template(): string {
        return `
        <li class="message-wrapper">
              <div class="message sent">
                <span class="message-content">${this.message.content}</span>
                <span class="message-time">${new Date(
                    this.message.timestamp
                ).toLocaleDateString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                })}</span>
              </div>
            </li>
            <li class="message-wrapper">
              <div class="message received component-je9i4vpup">
                <strong>user1</strong>
                <span class="message-content">hi</span>
                <span class="message-time">15:54</span>
              </div>
        </li>
        `
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
        return{}
    }
}