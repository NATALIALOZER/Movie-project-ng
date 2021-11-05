import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {movidbAuthResponse, User} from '../models/interfaces';


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }
  get token() {
    // @ts-ignore
    const expDate: Date = new Date(localStorage.getItem('token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  public login(user: User): any {
    let dbData: movidbAuthResponse;
    this.http.get<movidbAuthResponse>('https://api.themoviedb.org/3/authentication/token/new?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&')
      .subscribe(
      (response: movidbAuthResponse) => {
        user.request_token = response.request_token;
        dbData = response;
      }
    );

    setTimeout(() => {
      this.http.post
      (`https://api.themoviedb.org/3/authentication/session/new?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&`, user.request_token )
        .subscribe( () => {
          this.setToken( dbData );
        });

    }, 100);
  }

  public logout() {
    return this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(res: movidbAuthResponse | null) {
    if (res) {
      this.http.get<movidbAuthResponse>('https://api.themoviedb.org/3/authentication/token/new?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&')
      .subscribe(
        (response: movidbAuthResponse) => {
          /*user.request_token = response.request_token;*/
          localStorage.setItem('token', response.request_token);
          localStorage.setItem('token-exp', response.expires_at);
          /*return user.request_token;*/
        }
      );
    } else {
      localStorage.clear();
    }
  }
}
