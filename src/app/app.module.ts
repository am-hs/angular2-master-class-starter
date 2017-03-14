import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ValueProvider, OpaqueToken } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ContactsAppComponent } from './contacts.component';
import { ContactsService } from "./contacts.service";
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { APP_ROUTES } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { HttpModule } from "@angular/http";
import { API_ENDPOINT_TOKEN } from './data/tokens';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { FormsModule } from "@angular/forms";
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent
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
