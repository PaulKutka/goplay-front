import { Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortalComponent } from './portal/portal.component';
import { AuthGuard } from './shared/authorization/auth-guard';

export const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'main', component: PortalComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404' }
];
