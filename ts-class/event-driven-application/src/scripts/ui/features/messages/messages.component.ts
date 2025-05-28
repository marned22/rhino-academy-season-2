import { IChatMessage } from "../../../models";
import { MessageService } from "../../../services";
import { BaseComponent } from "../../base/base.component";
import { MessageItemComponent } from "./message-item.component";
import { ChatManager } from "../../../core"

export class MessagesComponent extends BaseComponent {
    private messages: IChatMessage[] = [];
    private messageService: MessageService;
    private chatManager: ChatManager;
    private badWordsWorker: Worker

    constructor(parent: Element, messageService: MessageService, chatManager: ChatManager) {
        super(parent);
        this.messageService = messageService;
        this.chatManager = chatManager;

        this.badWordsWorker = new Worker(new URL('../../../workers/badWordsWorker.js', import.meta.url));

        this.loadMessages();

        // Subscribe to new messages
        this.chatManager.eventManager.subscribe('messageSent', (message: IChatMessage) => {
            this.filterAndAddMessage(message);
        });

        this.badWordsWorker.onmessage = (event) => {
            const filteredContent = event.data
            const filteredMessage: IChatMessage = {
                ...this.messages[this.messages.length - 1],
                content: filteredContent,
            };
            this.addMessage(filteredMessage);
        };
    }

    private async loadMessages() {
        const roomId = this.chatManager.getCurrentRoomId();
        if (!roomId) {
            console.error("No room joined");
            return;
        }

        this.messages = []

        this.messages = await this.messageService.getByRoomId(roomId);
        this.renderMessages();
    }

    private filterAndAddMessage(message: IChatMessage) {
        const currentRoomId = this.chatManager.getCurrentRoomId()
        if(message.roomId !== currentRoomId) {
            return
        }
        this.badWordsWorker.postMessage(message.content)

        this.messages.push(message)
    }

    public addMessage(message: IChatMessage) {
        this.messages[this.messages.length - 1] = message
        this.renderMessages();
    }

    private renderMessages() {
        const container = document.querySelector('#messages-container');
        if (!container) {
            console.error("Messages container not found!");
            return;
        }

        const currentUserId = this.chatManager.getCurrentUser()?.id || '';
        this.renderList<IChatMessage>(
            '#messages-container',
            this.messages,
            (message) => `message_id_${message.id}`,
            (element, item) => new MessageItemComponent(element, item, currentUserId)
        );
    }

    template(): string {
        return `
        <ul id="messages-container" class="messages-container"></ul>
        `;
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void; }; } {
        return{}
    }
}