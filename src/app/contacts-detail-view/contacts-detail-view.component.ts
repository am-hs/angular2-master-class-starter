import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Contact } from "../models/contact";
import { ContactsService } from './../contacts.service';
import { EventBusService } from './../event-bus.service';
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
    private contactsService: ContactsService,
    private eventBusService: EventBusService
  ) { }

  ngOnInit() {
    this.activatedRoute.data
      .map(data => <Contact>data['contact'])
      .subscribe(contact => this.contact = contact);
    
    this.eventBusService.emit(
      EventBusService.TYPE_APP_TITLE,
      "Contact details"
      );
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute })
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}
