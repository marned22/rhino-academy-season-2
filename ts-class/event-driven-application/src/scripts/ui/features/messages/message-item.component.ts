import { IChatMessage } from "../../../models";
import { BaseComponent } from "../../base/base.component";


export class MessageItemComponent extends BaseComponent{
    constructor(parent: Element, private message: IChatMessage){
        super(parent)
    }

    template(): string {
        return `
    <div class="message sent">
        <span class="message-content">${this.message.content}</span>
        <span class="message-time">${new Date(
            this.message.timestamp
        ).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })}</span>
    </div>
    `;
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
        return{}
    }
}