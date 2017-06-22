import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class InformationService {

  constructor(
    private http: Http
  ) { }

  getAllUsers() {
    const headers = new Headers();
    return this.http.get(
      `${environment.apiUrl}/user/all`,
      { headers }
    ).map((res: Response) => res.json());
  }

}