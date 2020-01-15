export class Notification {
  identifier: string;
  payload: any;

  constructor(payload: object) {
    this.payload = payload;
    this.identifier = '';
    if(payload!==null) {
      this.identifier = this.payload.identifier || this.payload.notId || '';
    }
  }

  get title(): string {
    return this.payload.title;
  }

  get body(): string {
    return this.payload.body||this.payload.message;
  }

  get sound(): string {
    return this.payload.sound;
  }

  get badge(): number {
    return this.payload.badge;
  }

  get type(): string {
    return this.payload.type;
  }

  get thread(): string {
    return this.payload.thread;
  }
}
