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

  contact: Contact
  warnOnClosing: boolean = true

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventBusService: EventBusService,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {    
    this.activatedRoute.data
      .map(data => <Contact>data['contact'])
      .subscribe(contact => this.contact = contact);
    
    this.eventBusService.emit(
      EventBusService.TYPE_APP_TITLE,
      "Contact editor"
      );
  }

  cancel(contact: Contact) {
    this.navigateToList();
  }

  save(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(() => {
        this.warnOnClosing = false;
        this.navigateToList();
      });
  }

  navigateToList() {
    this.router.navigate(['/contacts', this.contact.id ]);
  }
}