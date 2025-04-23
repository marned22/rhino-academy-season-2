import { AuthEvents, IChatEvents, INotificationEvents } from "./models"
import { ChatManager, EventManager, NotificationManager } from "./core"
import { HeaderComponent, MainComponent} from "./ui/layout"
import { AuthService, RoomService } from "./services"

class App {
    private static eventHub = EventManager.getEventManager<AuthEvents>()
    private static chatManager: ChatManager
    private static notificationsManager: NotificationManager
    private static authService: AuthService
    private static roomService: RoomService
    static HeaderComponent: HeaderComponent
    static MainComponent: MainComponent

    static async init() {
        App.authService = AuthService.getInstance(); // Ensure authService is initialized

        App.chatManager = new ChatManager(
            App.eventHub as unknown as EventManager<IChatEvents>,
            App.authService 
        );

        await App.chatManager.initialize(); // Ensure rooms are loaded

        App.notificationsManager = new NotificationManager(
            App.eventHub as unknown as EventManager<INotificationEvents>
        );

        const roomService = new RoomService();

        const root = document.getElementById('root');

        if (!root) {
            throw new Error('Root element not found');
        }

        // Clear the root element before rendering
        root.innerHTML = '';

        // Create containers for header and main sections
        const headerContainer = document.createElement('div');
        headerContainer.id = 'header';

        const mainContainer = document.createElement('div');
        mainContainer.id = 'main';

        // Append the containers to the root
        root.appendChild(headerContainer);
        root.appendChild(mainContainer);

        // Initialize and render components
        this.HeaderComponent = new HeaderComponent(headerContainer, App.authService, App.eventHub);
        this.MainComponent = new MainComponent(mainContainer, App.authService, App.chatManager, App.eventHub, roomService);

        this.HeaderComponent.render();
        this.MainComponent.render();
    }
}

App.init()