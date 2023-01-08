import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MentionsComponent } from './pages/mentions/mentions.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: NavbarComponent
  },

  {
    path: 'mentions',
    component: MentionsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
