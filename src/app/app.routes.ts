import { AboutComponent } from './about/about.component';
import { CONFIRM_GUARD } from "./data/tokens";
import { ContactsDetailViewComponent } from "./contacts-detail-view/contacts-detail-view.component";
import { ContactsEditorComponent } from "./contacts-editor/contacts-editor.component";
import { ContactsResolver } from "./shared/contacts.resolver";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from "@angular/router/typings/router";

export const APP_ROUTES: Route[] = [
     { path: 'about', loadChildren: './about/about.module#AboutModule' },
     { path: '', component: DashboardComponent, children: [
        { path: 'contacts/:id', component: ContactsDetailViewComponent,
            resolve: { contact: ContactsResolver } },
        { path: 'contacts/:id/edit', component: ContactsEditorComponent,
            canDeactivate: [ CONFIRM_GUARD],
            resolve: { contact: ContactsResolver } },
        { path: '**', redirectTo: '/contacts/0' }
     ]},
     { path: '**', redirectTo: '/' }
]