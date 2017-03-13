import { Component, OnInit } from '@angular/core';
import { Contact } from "../models/contact";
import { ContactsService } from "../contacts.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contactsService
      .getContact(this.activatedRoute.snapshot.params['id'])
      .subscribe(contact => this.contact = contact)
      ;
  }
}
