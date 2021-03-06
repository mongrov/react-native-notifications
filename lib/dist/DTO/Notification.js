"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    constructor(payload) {
        this.payload = payload;
        this.identifier = '';
        if (payload !== null) {
            this.identifier = this.payload.identifier || this.payload.notId || '';
        }
    }
    get title() {
        return this.payload.title;
    }
    get body() {
        return this.payload.body || this.payload.message;
    }
    get sound() {
        return this.payload.sound;
    }
    get badge() {
        return this.payload.badge;
    }
    get type() {
        return this.payload.type;
    }
    get thread() {
        return this.payload.thread;
    }
}
exports.Notification = Notification;
