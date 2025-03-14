import { EventManager } from "./models/eventManager"
import { AppNotification, NotificationManager } from "./models/notification"

const eventBus = EventManager.getEventManager()
const notificationManager = new NotificationManager(eventBus)

notificationManager.sendNotification(new AppNotification('error', 'Something went wrong'))
notificationManager.sendNotification(new AppNotification('success','Working fine'))
notificationManager.sendNotification(new AppNotification('warning', 'There is warning'))