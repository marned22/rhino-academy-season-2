import { ChatManager, EventManager } from "../../core";
import { AuthEvents } from "../../models";
import { AuthService, MessageService, RoomService } from "../../services";
import { BaseComponent } from "../base/base.component";
import { MessagesComponent } from "../features/messages/messages.component";
import { SideBarComponent } from "./sidebar.component";
import { LoginComponent } from "../features/auth/login.component";
export class MainComponent extends BaseComponent {
  private isAuth: boolean = false;
  private authService: AuthService;
  private eventManager: EventManager<AuthEvents>;
  private chatManager: ChatManager
  private roomService: RoomService
  private messageService: MessageService

  constructor(parent: Element, authService: AuthService, chatManager: ChatManager, eventManager: EventManager<AuthEvents>, roomService: RoomService) {
    super(parent);

    this.authService = authService;
    this.eventManager = eventManager;
    this.chatManager = chatManager;
    this.roomService = roomService;
    this.messageService = new MessageService();

    // Initialize isAuth based on the current authentication state
    this.isAuth = this.authService.isAuthenticated();

    // Subscribe to login and logout events
    this.eventManager.subscribe('login', () => {
        this.isAuth = true;
        this.render();
    });

    this.eventManager.subscribe('logout', () => {
        this.isAuth = false;
        this.render();
    });

    this.registerChild(
        '#messages',
        (element) => new MessagesComponent(element, this.messageService, this.chatManager)
    );

    this.registerChild(
        '.chat-sidebar',
        (element) => new SideBarComponent(element, chatManager, this.roomService)
    );
  }

  getBindingEvents(): {
    [selector: string]: { event: string; handler: (ev: Event) => void };
  } {
    return {
      '#send-btn': {
        event: 'click',
        handler: (ev: Event) => {
          const input = document.querySelector<HTMLTextAreaElement>('#message');
          if (input && input.value) {
            try {
              if (!this.chatManager.getCurrentRoomId()) {
                throw new Error('No room currently joined');
              }
              this.chatManager.sendMessage(input.value);
              input.value = ''; 
            } catch (error) {
              console.log('count', error) 
            }
          }
        },
      },
    };
  }

  template(): string {
    if (!this.isAuth) {
        return `
        <main class="chat-main">
          <div class="chat-login-main">
            <h1>Please login to continue</h1>
          </div>
        </main>
      `;
    }

    return `
      <main class="chat-main">
        <section class="chat-box">
          <div id="messages"></div>

          <footer class="message-input">
            <textarea id="message" placeholder="Type a message..." spellcheck="false"></textarea>
            <button id="send-btn">
              <span class="material-icons">send</span>
            </button>
          </footer>
        </section>
        <aside class="chat-sidebar"></aside>
      </main>
    `;
  }
}