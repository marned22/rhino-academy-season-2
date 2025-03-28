import { IChatEvents, INotificationEvents } from "./models"
import { ChatManager, EventManager, NotificationManager } from "./core"
import { HeaderComponent, MainComponent} from "./ui/layout"

class App {
    private static eventHub = EventManager.getEventManager()
    private static chatManager: ChatManager
    private static notificationsManager: NotificationManager
    static HeaderComponent: HeaderComponent
    static MainComponent: MainComponent


    static init(){
        App.chatManager = new ChatManager(
            App.eventHub as unknown as EventManager<IChatEvents>
        )

        App.notificationsManager = new NotificationManager(
            App.eventHub as unknown as EventManager<INotificationEvents>
        )
        const root = document.getElementById('root')

        if(!root) {
            throw new Error('Root element not found')
        }

        this.HeaderComponent = new HeaderComponent(root)
        this.MainComponent = new MainComponent(root)

        this.HeaderComponent.render()
        this.MainComponent.render()
    }
}

App.init()