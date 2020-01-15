import { NativeCommandsSender } from './NativeCommandsSender';
import { Notification } from '../DTO/Notification';
export declare class CompletionCallbackWrapper {
    private readonly nativeCommandsSender;
    constructor(nativeCommandsSender: NativeCommandsSender);
    wrapReceivedCallback(callback: Function): (notification: Notification) => void;
    wrapOpenedCallback(callback: Function): (notification: Notification) => void;
}
