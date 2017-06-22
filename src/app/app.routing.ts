import { Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
import { PortalComponent } from './portal/portal.component';

export const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'main', component: PortalComponent}
];
