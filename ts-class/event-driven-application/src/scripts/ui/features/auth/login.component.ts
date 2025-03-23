import { BaseComponent } from "../../base/base.component";

export class LoginComponent extends BaseComponent {
    constructor(parent: Element){
        super(parent)
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void } } {
      return {
        '#login-btn': {
          event: 'click',
          handler: this.handleLogin,
        }
      }
    }

    private handleLogin(){
      console.log('Login clicked')
    }


    template(): string{
        return `
        <div class="chat-login">
          <input type="text" id="username" placeholder="Enter your name...">
          <input type="password" id="password" placeholder="Enter your password...">
          <button id="login-btn">Login</button>
        </div>`
    }

}