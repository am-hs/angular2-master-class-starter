import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EventBusService {

  static TYPE_APP_TITLE = 'app_title';

  private messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    this.messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this.messages$
      .filter(args => args.type == eventType)
      .map(args => args.data);
  }
}

export class EventBusArgs {
  type: string
  data: any
}