import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { Contact } from "../models/contact";
import { ContactsService } from './../contacts.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactsResolver implements Resolve<Contact> {

    constructor(
        private contactsService: ContactsService
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.contactsService.getContact(route.params['id']);
    }
}