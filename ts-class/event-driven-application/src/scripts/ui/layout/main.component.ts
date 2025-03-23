import { BaseComponent } from "../base/base.component";
import { MessagesComponent } from "../features/messages/messages.component";

export class MainComponent extends BaseComponent {
  private isAuth: boolean = true;

  constructor(parent: Element) {
    super(parent);
    this.parent = parent;

    this.registerChild(
      "#messages",
      (element) => new MessagesComponent(element)
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
      <aside class="chat-sidebar">
        <div id="sidebar-section">
          <div class="room-creation">
            <div class="room-creation component-btb6704r2">
              <input type="text" id="room-name" placeholder="Enter room name...">
              <button id="create-room-btn">Create</button>
            </div>
          </div>
          <div class="room-list">
            <ul id="room-list">
              <li class="active">
                <div id="room-item-wrapper" class="room-item-wrapper active">
                  <div class="room-info">
                    <span class="room-name">general</span>
                    <span class="room-count">5 users</span>
                  </div>
                  <button id="leave-room-btn" class="leave-room-btn" title="Leave Room">
                    <span>×</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
    `;
  }
}
