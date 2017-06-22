import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { MdToolbarModule, MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule
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
