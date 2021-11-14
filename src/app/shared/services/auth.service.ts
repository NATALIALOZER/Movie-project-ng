import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {movidbAuthResponse, User} from '../models/interfaces';
import {Observable, of, Subject, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) {}

  public get token(): string | null {
    const expDate: Date = new Date(localStorage.getItem('token-exp') as string);
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  public login(body: User): Observable<any> {
      return this.http.post
      (`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&`
        , body).pipe(
          catchError( error => {
            return this.handleError(error);
          })
      );
  }

  public logout(): void {
    return this.setToken(null);
  }

   public isAuthenticated(): boolean {
    return !!this.token;
  }

  public getPreviousToken(): Observable<movidbAuthResponse> {
    return this.http.get<movidbAuthResponse>('https://api.themoviedb.org/3/authentication/token/new?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&');
  }

  public setToken(res: movidbAuthResponse | null): void {
    if (res) {
      this.http.get<movidbAuthResponse>('https://api.themoviedb.org/3/authentication/token/new?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&')
        .subscribe(
          (response: movidbAuthResponse) => {
            localStorage.setItem('token', response.request_token);
            localStorage.setItem('token-exp', response.expires_at);
          }
        );
    } else {
      localStorage.clear();
    }
  }

  private handleError(error: HttpErrorResponse ): Observable<never> {
    const message = error.error.status_message;
    switch (message) {
      case 'Invalid username and/or password: You did not provide a valid login.':
        this.error$.next('Invalid username and/or password');
        break;
      case 'Email not verified: Your email address has not been verified.':
        this.error$.next('Email not verified');
        break;
      default:
        break;
    }
    return throwError(error);
  }
}
