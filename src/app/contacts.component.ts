import { Component, OnInit } from '@angular/core';

import { EventBusService } from './event-bus.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit {

  title: string
  
  constructor(
    private eventBusService: EventBusService
  ) {}

  ngOnInit() {
    this.eventBusService
      .observe(EventBusService.TYPE_APP_TITLE)
      .subscribe(data => this.title = <string>data);
  }
}
