import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';

import { MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [],
})
export class NavbarModule { }
