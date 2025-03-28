import { BaseComponent } from "../base/base.component";
import { MessagesComponent } from "../features/messages/messages.component";
import { SideBarComponent } from "./sidebar.component";

export class MainComponent extends BaseComponent {
  private isAuth: boolean = true;

  constructor(parent: Element) {
    super(parent);
    this.parent = parent;

    this.registerChild(
      "#messages",
      (element) => new MessagesComponent(element)
    );

    this.registerChild(
      '.chat-sidebar',
      (element) => new SideBarComponent(element)
    )
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
