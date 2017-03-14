import { NgModule, OpaqueToken, ValueProvider } from '@angular/core';

import { API_ENDPOINT_TOKEN } from './data/tokens';
import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsAppComponent } from './contacts.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsService } from "./contacts.service";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule
  ],
  providers: [
    ContactsService,
   <ValueProvider>{ provide: API_ENDPOINT_TOKEN, useValue: 'http://localhost:4201' }
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
