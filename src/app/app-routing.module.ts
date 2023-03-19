import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocComponent } from './doc/doc.component';

import { ErrorComponent } from './error/error.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NmsComponent } from './nms/nms.component';
import { SignupComponent } from './signup/signup.component';




const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'doc',component:DocComponent},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  

  { path: 'nms', component: NmsComponent },
  {path: '**', component:ErrorComponent},
  {path: 'logout', component:LogoutComponent},

  {path:'app',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
