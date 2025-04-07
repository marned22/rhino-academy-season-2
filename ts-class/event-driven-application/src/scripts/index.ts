import { AuthEvents, IChatEvents, INotificationEvents } from "./models"
import { ChatManager, EventManager, NotificationManager } from "./core"
import { HeaderComponent, MainComponent} from "./ui/layout"
import { AuthService } from "./services"

class App {
    private static eventHub = EventManager.getEventManager<AuthEvents>()
    private static chatManager: ChatManager
    private static notificationsManager: NotificationManager
    private static authService: AuthService
    static HeaderComponent: HeaderComponent
    static MainComponent: MainComponent


    static init() {
        App.chatManager = new ChatManager(
            App.eventHub as unknown as EventManager<IChatEvents>
        );

        App.notificationsManager = new NotificationManager(
            App.eventHub as unknown as EventManager<INotificationEvents>
        );

        App.authService = AuthService.getInstance();

        const root = document.getElementById('root');

        if (!root) {
            throw new Error('Root element not found');
        }

        // Clear the root element before rendering
        root.innerHTML = '';

        this.HeaderComponent = new HeaderComponent(root, App.authService, App.eventHub);
        this.MainComponent = new MainComponent(root, App.authService, App.eventHub);

        this.HeaderComponent.render();
        this.MainComponent.render();
    }
}

App.init()