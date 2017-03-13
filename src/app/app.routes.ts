import { Route } from "@angular/router/typings/router";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";

export const APP_ROUTES: Route[] = [
     { path: '', component: ContactsListComponent }
]