import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';
import { appRoutes } from './portal.routing';
import { NavbarModule } from '../shared/navbar/navbar.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MdGridListModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdAutocompleteModule, MdCheckboxModule
} from '@angular/material';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { GameService } from '../authentication/services/game.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    NavbarModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule,
    MdAutocompleteModule,
      MdCheckboxModule
  ],
  exports: [],
  declarations: [
    PortalComponent,
    DialogComponent
  ],
  providers: [
      GameService
  ],
})
export class PortalModule {
}
