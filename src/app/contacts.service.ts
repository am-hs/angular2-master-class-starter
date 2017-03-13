import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import { Contact } from "./models/contact";
import { Observable } from "rxjs/Observable";
import { API_ENDPOINT_TOKEN } from './data/tokens';

@Injectable()
export class ContactsService {

  constructor(
    private http: Http,
    @Inject(API_ENDPOINT_TOKEN) private apiToken: string
  ) { }

  getContacts() : Observable<Contact[]> {
    return this.http.get(this.apiToken + '/api/contacts')
      .map(response => response.json().items);
  }

  getContact(id: number) : Observable<Contact> {
    return this.getContacts()
      .map(contacts => contacts.find(contact => contact.id == id));
  }
}
