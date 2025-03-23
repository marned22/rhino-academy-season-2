import { IChatEvents, INotificationEvents } from "./models"
import { ChatManager, EventManager, NotificationManager } from "./core"
import { HeaderComponent } from "./ui/layout/header.component"
import { MainComponent } from "./ui/layout/main.component"


class App {
    private static eventHub = EventManager.getEventManager()
    private static chatManager: ChatManager
    private static notificationsManager: NotificationManager
    static HeaderComponent: HeaderComponent
    static mainComponent: MainComponent


    static init(){
        App.chatManager = new ChatManager(
            App.eventHub as unknown as EventManager<IChatEvents>
        )

        App.notificationsManager = new NotificationManager(
            App.eventHub as unknown as EventManager<INotificationEvents>
        )
        const root = document.getElementById('root')

        if(!root) {
            throw new Error('Root elemtn not fount')
        }

        this.HeaderComponent = new HeaderComponent(root)
        this.mainComponent = new MainComponent(root)

        this.HeaderComponent.render()
        this.mainComponent.render()
    }
}

App.init()