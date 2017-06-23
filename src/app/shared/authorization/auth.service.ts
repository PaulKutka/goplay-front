import { environment } from 'environments/environment';
import {
  Headers,
  Http,
  RequestOptions,
  Response
} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


class Token{
  token: string;
}

@Injectable()
export class AuthService {
  private token : Token;

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(
    private http: Http
  ) { }


  login(user) {
    return this.http.post(
      `${environment.apiUrl}/login`,
      user, this.options)
      .map(res => {
        this.token = res.json();
        console.log(this.token.token);
        localStorage.setItem("token", this.token.token);
      })
      .catch(this.handleError);
  }

  logout(): void {
    localStorage.clear();
  }

  private handleError(error: Response) {
    try {
      return Observable.throw(error.json().message);
    } catch (e) {
      return Observable.throw('Sorry, something went wrong');
    }
  }
}
