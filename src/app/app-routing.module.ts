import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {RegularEventsComponent} from './regular-events/regular-events.component';
import {SpecialEventsComponent} from './special-events/special-events.component';
import {AuthGuard} from './shared/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'regular',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regular',
    component: RegularEventsComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
