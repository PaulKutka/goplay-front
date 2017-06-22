import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MdInputModule, MdCardModule, MdButtonModule } from '@angular/material';

import { appRoutes } from './authentication.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthenticationComponent
  ],
  providers: [],
})
export class AuthenticationModule { }
