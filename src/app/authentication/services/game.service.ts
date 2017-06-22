import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class GameService {
  constructor(private http: Http) {}

  getGames() {
    const headers = new Headers();
    return this.http
        .get(`${environment.apiUrl}/game/all`, { headers })
        .map((res: Response) => res.json());
  }

  getTimes(id) {
    const headers = new Headers();
    return this.http
        .get(`${environment.apiUrl}/times/${id}`, { headers })
        .map((res: Response) => res.json());
  }
}
