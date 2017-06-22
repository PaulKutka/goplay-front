import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationService } from './services/authentication.service';
import { InformationService } from '../portal/services/information.service';
import { AuthenticationComponent } from './authentication.component'; 

import { appRoutes } from './authentication.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthenticationComponent
  ],
  providers: [
    AuthenticationService,
    InformationService
  ],
})
export class AuthenticationModule { }
