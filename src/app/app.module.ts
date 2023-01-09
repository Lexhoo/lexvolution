import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { BioComponent } from './pages/bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    NavbarComponent,
    MentionsComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
