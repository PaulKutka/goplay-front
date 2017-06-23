import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}