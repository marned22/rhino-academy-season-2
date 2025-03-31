import { EventManager } from "../../core";
import { AuthEvents } from "../../models";
import { AuthService } from "../../services";
import { BaseComponent } from "../base/base.component"
import { LoginComponent } from "../features/auth/login.component";

export class HeaderComponent extends BaseComponent {
    private authService: AuthService
    private eventManager: EventManager<AuthEvents>

    constructor(parent: Element, authService: AuthService, eventManager: EventManager<AuthEvents>){
        super(parent)
        this.authService = authService
        this.eventManager = eventManager

        this.registerChild('#chat-login-container',(element) => new LoginComponent(element))

        this.eventManager.subscribe('login', () => this.render())
        this.eventManager.subscribe('logout', () => this.render())
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void } } {
      return {
        '#logout-btn': {
          event: 'click',
          handler: this.handleLogout,
        }
      }
    }


    private handleLogout(){
      this.authService.logout()
    }

    template(): string{
        return `   <header class="chat-header">
      <div id="chat-login-container"></div>
      <div class="user-info">
        <span id="user-display"></span>
        <button id="logout-btn">Logout</button>
      </div>
    </header>`
    }

}