import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';
import { appRoutes } from './portal.routing';
import { NavbarModule } from '../shared/navbar/navbar.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(appRoutes),
    NavbarModule
  ],
  exports: [],
  declarations: [
    PortalComponent
  ],
  providers: [],
})
export class PortalModule { }
