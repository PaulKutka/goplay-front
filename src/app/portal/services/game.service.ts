import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class GameService {
  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' +
        localStorage.getItem('access_token'));
    headers.append('Content-Type', 'application/json');
  }

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

  startMatch(timeSlotId, player12Id, player21Id, player22Id){
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http
        .post(`${environment.apiUrl}/match/start`,JSON.stringify({
          timeSlotId: timeSlotId,
          player12Id: player12Id,
          player21Id: player21Id,
          player22Id: player22Id
        }), { headers })
        .map((res: Response) => res.json());
  }
}
