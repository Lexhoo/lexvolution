import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailComponent } from './pages/email/email.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MentionsComponent,
    ContactComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
