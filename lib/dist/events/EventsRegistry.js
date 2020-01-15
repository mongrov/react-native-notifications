"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsRegistry {
    constructor(nativeEventsReceiver, completionCallbackWrapper) {
        this.nativeEventsReceiver = nativeEventsReceiver;
        this.completionCallbackWrapper = completionCallbackWrapper;
    }
    registerRemoteNotificationsRegistered(callback) {
        return this.nativeEventsReceiver.registerRemoteNotificationsRegistered(callback);
    }
    registerNotificationReceived(callback) {
        return this.nativeEventsReceiver.registerRemoteNotificationReceived(this.completionCallbackWrapper.wrapReceivedCallback(callback));
    }
    registerRemoteNotificationOpened(callback) {
        return this.nativeEventsReceiver.registerRemoteNotificationOpened(this.completionCallbackWrapper.wrapOpenedCallback(callback));
    }
    registerRemoteNotificationsRegistrationFailed(callback) {
        return this.nativeEventsReceiver.registerRemoteNotificationsRegistrationFailed(callback);
    }
}
exports.EventsRegistry = EventsRegistry;
