import { IChatMessage } from "../../../models";
import { BaseComponent } from "../../base/base.component";

export class MessageItemComponent extends BaseComponent {
    constructor(parent: Element, private message: IChatMessage, private currentUserId: string) {
        super(parent);
    }

    template(): string {
        let formattedTime = "Just now";
        
        try {
            const timestamp = this.message.timestamp;
            
            if (!timestamp) {
                formattedTime = "Just now";
            } else if (typeof timestamp === 'string') {
                const date = new Date(timestamp);
                if (!isNaN(date.getTime())) {
                    formattedTime = date.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                    });
                }
            } else if (typeof timestamp === 'number') {
                let date: Date;
                if (timestamp.toString().length === 10) {
                    date = new Date(timestamp * 1000);
                } else if (timestamp.toString().length === 13) {
                    date = new Date(timestamp);
                } else {
                    date = new Date();
                }
                
                if (!isNaN(date.getTime())) {
                    formattedTime = date.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                    });
                }
            } else {
                const date = new Date();
                formattedTime = date.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true 
                });
            }
        } catch (error) {
            console.error('Error formatting timestamp:', this.message.timestamp, error);
            formattedTime = "Just now";
        }
        const isCurrentUser = this.message.userId === this.currentUserId;
        const messageClass = isCurrentUser ? 'sent' : 'received';
        
        return `
        <li class="message-item">
            <div class="message ${messageClass}">
                ${!isCurrentUser ? `<strong class="sender-name">${this.message.userName || this.message.userId}</strong>` : ''}
                <span class="message-content">${this.message.content}</span>
                <span class="message-time">${formattedTime}</span>
            </div>
        </li>
        `;
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void } } {
        return {};
    }
}