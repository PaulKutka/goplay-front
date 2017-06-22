import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {}

  registrate(payload) {
    const headers = new Headers();
    return this.http
      .post(`${environment}/register`, payload, { headers })
      .map((res: Response) => res.json());
  }

  login(payload) {
    const headers = new Headers();
    return this.http
      .post(`${environment}/login`, payload, { headers })
      .map((res: Response) => res.json());
  }
}
