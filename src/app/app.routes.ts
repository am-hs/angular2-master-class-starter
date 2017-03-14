import { ContactsDetailViewComponent } from "./contacts-detail-view/contacts-detail-view.component";
import { ContactsEditorComponent } from "./contacts-editor/contacts-editor.component";
import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { Route } from "@angular/router/typings/router";

export const APP_ROUTES: Route[] = [
     { path: '', component: ContactsListComponent },
     { path: 'contacts/:id', component: ContactsDetailViewComponent },
     { path: 'contacts/:id/edit', component: ContactsEditorComponent },
     { path: '**', redirectTo: '/' }
]