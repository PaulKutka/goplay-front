import { Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
import { PortalComponent } from './portal/portal.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'main', component: PortalComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404' }
];
