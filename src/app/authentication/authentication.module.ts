import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication.component';

import { MdInputModule, MdCardModule, MdButtonModule, MdGridListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { appRoutes } from './authentication.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule
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
