import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

import { Component, OnInit } from '@angular/core';

import { Contact } from "../models/contact";
import { ContactsService } from "../contacts.service";
import { EventBusService } from './../event-bus.service';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Contact[]>
  terms$ = new Subject<string>();
  
  constructor(
      private contactsService: ContactsService,
      private eventBusService: EventBusService
  ) {}

  ngOnInit() {
    this.update();
    this.eventBusService
      .observe(EventBusService.TYPE_UPDATE_LIST)
      .subscribe(() => this.update());
  }

  update() {
    this.contacts = this.terms$
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.contactsService.search(term))
      .merge(this.contactsService.getContacts())
      ;
  }
}
