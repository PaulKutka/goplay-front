import { Routes } from '@angular/router';

import { PortalComponent } from './portal.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const appRoutes: Routes = [
  { path: '', component: PortalComponent },
    { path: 'leaderboard', component: LeaderboardComponent}
];
