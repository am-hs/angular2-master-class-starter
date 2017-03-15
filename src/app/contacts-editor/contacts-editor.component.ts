import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

import { Contact } from "../models/contact";
import { ContactsService } from "../contacts.service";
import { EventBusService } from './../event-bus.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact: Contact;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.contact = this.contactsService.getDefault();
    
    this.contactsService
      .getContact(this.activatedRoute.snapshot.params['id'])
      .subscribe(contact => this.contact = contact)
      ;
    
    this.eventBusService.emit(
      EventBusService.TYPE_APP_TITLE,
      "Contact editor"
      );
  }

  cancel(contact: Contact) {
    this.router.navigate(['/contacts', contact.id ]);
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(() => this.cancel(contact));
  }
}
