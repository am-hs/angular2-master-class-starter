import 'rxjs/add/operator/map';

import { Inject, Injectable, OpaqueToken } from '@angular/core';

import { API_ENDPOINT_TOKEN } from './data/tokens';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from "./models/contact";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

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

  getDefault() : Contact {
    return {
      id: 0,
      name: '',
      birthday: '',
      email: '',
      image: '',
      phone: '',
      website: '',
      address: {
        street: '',
        city: '',
        zip: '',
        country: ''
      }
    };
  }

  search(term: string) {
    let url = this.apiToken + '/api/search?text=' + term;
    return this.http.get(url)
      .map(response => response.json().items);
  }

  updateContact(contact: Contact) {
    return this.http.put(
      this.apiToken + '/api/contacts/' + contact.id,
      contact
      );
  }
}
