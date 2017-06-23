import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class SignedInGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate() {
    if (this.authService.loggedIn()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}