import { AuthService } from "../../../services";
import { BaseComponent } from "../../base/base.component";

export class LoginComponent extends BaseComponent {
  private authService: AuthService

    constructor(parent: Element, authService: AuthService){
        super(parent);

        this.authService = authService
    }

    getBindingEvents(): { [selector: string]: { event: string; handler: (ev: Event) => void } } {
      return {
        '#login-btn': {
          event: 'click',
          handler: this.handleLogin.bind(this)
        },
        '#username': {
          event: 'keydown',
          handler: (ev: Event) => {
            const ke = ev as KeyboardEvent;
            if (ke.key === 'Enter') {
              ke.preventDefault();
              this.handleLogin(ev);
            }
          }
        },
        '#password': {
          event: 'keydown',
          handler: (ev: Event) => {
            const ke = ev as KeyboardEvent;
            if (ke.key === 'Enter') {
              ke.preventDefault();
              this.handleLogin(ev);
            }
          }
        }
      }
    }

    private async handleLogin(ev: Event){
        const username = (document.querySelector('#username') as HTMLInputElement).value;
        const password = (document.querySelector('#password') as HTMLInputElement).value;

        const user = {
            username: username,
            password: password
        };

        try {
            console.log('Attempting login...');
            await this.authService.login(user);
            console.log('Login successful');
        } catch (error) {
            console.error('Login failed:', error);

            if (error instanceof Error && error.message === 'User not found') {
                console.log('User not found, attempting to register...');
                try {
                    await this.authService.register(user);
                    console.log('Registration successful, logging in...');
                    await this.authService.login(user);
                } catch (registerError) {
                    console.error('Registration failed:', registerError);
                }
            } else {
                console.error('Unexpected error during login:', error);
            }
        }
    }


    template(): string{
        return `
        <div class="chat-login">
          <input type="text" id="username" placeholder="Enter your name...">
          <input type="password" id="password" placeholder="Enter your password...">
          <button id="login-btn">Login</button>
        </div>
        `
    }

}