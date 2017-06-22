import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication.component';

import { appRoutes } from './authentication.routing';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(appRoutes)
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
