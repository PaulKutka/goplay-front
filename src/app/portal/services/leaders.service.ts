import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class LeadersService {

  constructor(
    private http: Http
  ) { }

  getLeaders() {
    const headers = new Headers();
    return this.http.get(
      `${environment.apiUrl}/leadboard/`,
      { headers }
    ).map((res: Response) => res.json());
  }
}