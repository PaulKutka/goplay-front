// import { AuthenticationService } from '../services/authentication.service';

import { AuthService } from '../../shared/authorization/auth.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required ]]
    });
  }

  onSubmit(): void {
    this.authService.login(this.form.value)
      .subscribe(
        response => this.router.navigate(['main']),
        error => console.log(error)
      );
  }
}
