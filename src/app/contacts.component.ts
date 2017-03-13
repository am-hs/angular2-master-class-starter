import { Component, OnInit } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { ContactsService } from "./contacts.service";
import { Contact } from "./models/contact";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit {
  contacts: Contact[]

  constructor(
      private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
