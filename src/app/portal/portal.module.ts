import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';
import { appRoutes } from './portal.routing';
import { NavbarModule } from '../shared/navbar/navbar.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeadersService } from "./services/leaders.service"

import {
  MdGridListModule,
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdAutocompleteModule, MdCheckboxModule, MdRadioModule
} from '@angular/material';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { GameService } from '../authentication/services/game.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

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
      MdCheckboxModule,
      MdRadioModule
  ],
  exports: [],
  declarations: [
    PortalComponent,
    DialogComponent,
    LeaderboardComponent
  ],
  providers: [
      GameService,
      LeadersService
  ],
})
export class PortalModule {
}
