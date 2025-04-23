import { IChatMessage } from "../../../models";
import { MessageService } from "../../../services";
import { BaseComponent } from "../../base/base.component";
import { MessageItemComponent } from "./message-item.component";
import { ChatManager } from "../../../core";

export class MessagesComponent extends BaseComponent {
    private messages: IChatMessage[] = [];
    private messageService: MessageService;
    private chatManager: ChatManager; 

    constructor(parent: Element, messageService: MessageService, chatManager: ChatManager) {
        super(parent);
        this.messageService = messageService;
        this.chatManager = chatManager;

        this.loadMessage();

        // Subscribe to messageSent event
        this.chatManager.eventManager.subscribe('messageSent', (message: IChatMessage) => {
            console.log("New message received:", message);
            this.addMessage(message);
        });
    }

    private async loadMessage() {
        const roomId = this.chatManager.getCurrentRoomId(); 
        console.log("Restored Room ID:", roomId); // Debugging log
        if (!roomId) {
            console.error("No room joined");
            return;
        }

        this.messages = await this.messageService.getByRoomId(roomId);
        console.log("Fetched messages after refresh:", this.messages); // Debugging log
        this.renderMessages();
    }

    public addMessage(message: IChatMessage) {
        this.messages.push(message);
        console.log("Adding new message:", message);
        this.renderMessages();
    }

    private renderMessages() {
        console.log("Rendering messages:", this.messages);
        const container = document.querySelector('#messages-container');
        if (!container) {
            console.error("Messages container not found!");
            return;
        }

        this.renderList<IChatMessage>(
            '#messages-container',
            this.messages,
            (message) => `message_id_${message.id}`,
            (element, item) => new MessageItemComponent(element, item)
        );
    }

    template(): string {
        return `
        <ul id="messages-container" class="messages-container"></ul>
        `;
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void } } {
        return {};
    }
}