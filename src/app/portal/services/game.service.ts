import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

@Injectable()
export class GameService {
  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization',localStorage.getItem('token'));
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
          player12Name: player12Id,
          player21Name: player21Id,
          player22Name: player22Id
        }), { headers })
        .map((res: Response) => res.json());
  }

  finishMatch(id, team1Id, team2Id, team1Result, team2Result){
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http
        .post(`${environment.apiUrl}/match/finish`,JSON.stringify({
          id: id,
          team1Id: team1Id,
          team2Id: team2Id,
          team1Result: team1Result,
          team2Result: team2Result
        }), { headers })
        .map((res: Response) => res.json());
  }
}
