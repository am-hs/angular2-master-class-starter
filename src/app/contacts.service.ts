import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import 'rxjs/add/operator/map';
import { Http } from "@angular/http";
import { Contact } from "./models/contact";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ContactsService {

  API_ENDPOINT = 'http://localhost:4201'

  constructor(
    private http: Http
  ) { }

  getContacts() : Observable<Contact[]> {
    return this.http.get(this.API_ENDPOINT + '/api/contacts')
      .map(response => response.json().items);
  }

  getContact(id: number) : Observable<Contact> {
    return this.getContacts()
      .map(contacts => contacts.find(contact => contact.id == id));
  }
}
