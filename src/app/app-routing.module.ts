import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { BioComponent } from './pages/bio/bio.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: NavbarComponent
  },

  {
    path: 'mentions',
    component: MentionsComponent
  },

  {
    path: 'bio',
    component: BioComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
