import { BaseComponent } from "../base/base.component"
import { LoginComponent } from "../features/auth/login.component";

export class HeaderComponent extends BaseComponent {
    constructor(parent: Element){
        super(parent)

        this.registerChild('#chat-login-container',(element) => new LoginComponent(element))
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
      console.log('Logout CLicked')
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