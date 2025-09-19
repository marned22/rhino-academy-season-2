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

        this.registerChild('#chat-login-container',(element) => new LoginComponent(element, authService))

        this.eventManager.subscribe('login', () => this.render())
        this.eventManager.subscribe('logout', () => this.render())
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void } } {
      return {
        '#logout-btn': {
          event: 'click',
          handler: this.handleLogout.bind(this),
        }
      }
    }


    private handleLogout(){
      this.authService.logout()
    }

    render(): void {
        this.parent.innerHTML = '';
        super.render();
    }

    template(): string{
      const isAuthenticated = this.authService.isAuthenticated()
      const currentUser = this.authService.getCurrentUser()
      console.log(isAuthenticated)
      console.log(currentUser)
        if(!isAuthenticated){
          return `  
    <header class="chat-header">
      <div id="chat-login-container"></div>
    </header>
    `}

        return `
          <header class="chat-header">
      <div class="chat-login">ChatMe - Mircame</div>
      <div class="user-info">
        <span id="user-display">${currentUser?.username || ''}</span>
        <button id="logout-btn" ${!isAuthenticated ? 'class="hidden"' : ''} >Logout</button>
      </div>
    </header>
        `
    }

    
}