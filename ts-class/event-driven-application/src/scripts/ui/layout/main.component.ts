import { ChatManager, EventManager } from "../../core";
import { AuthEvents } from "../../models";
import { AuthService, RoomService } from "../../services";
import { BaseComponent } from "../base/base.component";
import { MessagesComponent } from "../features/messages/messages.component";
import { SideBarComponent } from "./sidebar.component";

export class MainComponent extends BaseComponent {
  private isAuth: boolean = false;
  private authService: AuthService;
  private eventManager: EventManager<AuthEvents>;
  private chatManager: ChatManager
  private roomService: RoomService

  constructor(parent: Element, authService: AuthService, chatManager:ChatManager, eventManager: EventManager<AuthEvents>, roomService: RoomService) {
    super(parent);

    this.authService = authService;
    this.eventManager = eventManager;
    this.chatManager = chatManager
    this.roomService = roomService

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
      "#messages",
      (element) => new MessagesComponent(element)
    );

    this.registerChild(
      '.chat-sidebar',
      (element) => new SideBarComponent(element, chatManager, this.roomService)
    );
  }

  getBindingEvents(): {
    [selector: string]: { event: string; handler: (ev: Event) => void };
  } {
    return {};
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