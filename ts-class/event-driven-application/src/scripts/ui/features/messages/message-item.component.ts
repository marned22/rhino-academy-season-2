import { IChatMessage } from "../../../models";
import { BaseComponent } from "../../base/base.component";

export class MessageItemComponent extends BaseComponent {
    constructor(parent: Element, private message: IChatMessage, private currentUserId: string) {
        super(parent);
    }

    template(): string {
        const isSent = this.message.userId === this.currentUserId;
        const messageClass = isSent ? 'sent' : 'received';

        return `
        <li class="message-wrapper">
            <div class="message ${messageClass}">
                ${!isSent ? `<strong>${this.message.userName}</strong>` : ''}
                <span class="message-content">${this.message.content}</span>
                <span class="message-time">${new Date(
                    this.message.timestamp
                ).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                })}</span>
            </div>
        </li>
        `;
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
        return{}
    }
}