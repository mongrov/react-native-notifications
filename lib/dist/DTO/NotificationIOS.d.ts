import { Notification } from './Notification';
export declare class NotificationIOS extends Notification {
    readonly aps: any;
    readonly alert: any;
    readonly title: string;
    readonly body: string;
    readonly sound: string;
    readonly badge: number;
    readonly thread: string;
}
