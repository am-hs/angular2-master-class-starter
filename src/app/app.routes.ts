import { AboutComponent } from './about/about.component';
import { CONFIRM_GUARD } from "./data/tokens";
import { ContactsDetailViewComponent } from "./contacts-detail-view/contacts-detail-view.component";
import { ContactsEditorComponent } from "./contacts-editor/contacts-editor.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from "@angular/router/typings/router";

export const APP_ROUTES: Route[] = [
     { path: 'about', component: AboutComponent },
     { path: '', component: DashboardComponent, children: [
        { path: 'contacts/:id', component: ContactsDetailViewComponent },
        { path: 'contacts/:id/edit', component: ContactsEditorComponent, canDeactivate: [ CONFIRM_GUARD] },
        { path: '**', redirectTo: '/contacts/0' }
     ]},
     { path: '**', redirectTo: '/' }
]