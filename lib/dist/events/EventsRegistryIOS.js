"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsRegistryIOS {
    constructor(nativeEventsReceiver, completionCallbackWrapper) {
        this.nativeEventsReceiver = nativeEventsReceiver;
        this.completionCallbackWrapper = completionCallbackWrapper;
    }
    registerPushKitRegistered(callback) {
        return this.nativeEventsReceiver.registerPushKitRegistered(callback);
    }
    registerPushKitNotificationReceived(callback) {
        return this.nativeEventsReceiver.registerPushKitNotificationReceived(this.completionCallbackWrapper.wrapOpenedCallback(callback));
    }
}
exports.EventsRegistryIOS = EventsRegistryIOS;
