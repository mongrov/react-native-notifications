"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
class CompletionCallbackWrapper {
    constructor(nativeCommandsSender) {
        this.nativeCommandsSender = nativeCommandsSender;
    }
    wrapReceivedCallback(callback) {
        return (notification) => {
            const completion = (response) => {
                if (react_native_1.Platform.OS === 'ios') {
                    this.nativeCommandsSender.finishPresentingNotification(notification.identifier, response);
                }
            };
            callback(notification, completion);
        };
    }
    wrapOpenedCallback(callback) {
        return (notification) => {
            const completion = () => {
                if (react_native_1.Platform.OS === 'ios') {
                    this.nativeCommandsSender.finishHandlingAction(notification.identifier);
                }
            };
            callback(notification, completion);
        };
    }
}
exports.CompletionCallbackWrapper = CompletionCallbackWrapper;
