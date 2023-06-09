import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import { NmsComponent } from './nms/nms.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent} from './login/login.component';
import { DocComponent } from './doc/doc.component';
import { SignupComponent } from './signup/signup.component';

// import { ConvertToSpacesPipe } from './shared/ConvertToSpacesPipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    // ConvertToSpacesPipe,
    DashboardComponent,
    SidenavComponent,
    MenuComponent,
    NmsComponent,
    
    ErrorComponent,
    LogoutComponent,
    LoginComponent,
    DocComponent,
    SignupComponent,
    // SignupComponent
  ],
  imports: [
   
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  // exports:[ConvertToSpacesPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
