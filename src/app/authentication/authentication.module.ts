import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication.component';

import { MdInputModule } from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { appRoutes } from './authentication.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NgxErrorsModule,
    MdInputModule
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
