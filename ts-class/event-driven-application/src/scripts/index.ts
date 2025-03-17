import { EventManager } from "./models/eventManager"
import { displayError, displaySuccess, displayWarning, NotificationManager } from "./models/notification"

const eventBus = EventManager.getEventManager()
const notificationManager = new NotificationManager(eventBus)

notificationManager.sendNotification(new displayError('Something went wrong'))
notificationManager.sendNotification(new displaySuccess('Working fine'))
notificationManager.sendNotification(new displayWarning('There is warning'))