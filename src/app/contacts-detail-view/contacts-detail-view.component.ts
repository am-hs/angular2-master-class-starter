import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Contact } from "../models/contact";
import { ContactsService } from './../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact: Contact;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.contactsService
      .getContact(this.activatedRoute.snapshot.params['id'])
      .subscribe(contact => this.contact = contact);
    
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute })
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}
