import { Component, OnInit } from '@angular/core';

import { Contact } from './../models/contact';
import { ContactsListComponent } from './../contacts-list/contacts-list.component';
import { ContactsService } from './../contacts.service';
import { EventBusService } from './../event-bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
  }

  save(contact: Contact) {
    this.contactsService
      .addContact(contact)
      .subscribe(contact => {
        this.eventBusService.emit(EventBusService.TYPE_UPDATE_LIST);
        this.router.navigate(['/contacts', contact.id ]);
      });
  }

}
