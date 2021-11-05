import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Movie, MovieResults} from '../../shared/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  public getData(): Observable<MovieResults[]> {
    return this.http.get<Movie>(this.urlApi + `&page=1`).pipe(
      map(x => x.results)
    );
  }

  public getResponse(): Observable<Movie> {
    return this.http.get<Movie>(this.urlApi).pipe(tap(response =>
        response.total_results
    ));
  }

  public getById(page: number): Observable<MovieResults[]> {
    return this.http.get<Movie>(`${this.urlApi}&page=${page}`).pipe(
      map(x => x.results)
    );
  }

  public getDataEvent(event: number): Observable<MovieResults[]> {
    return this.http.get<Movie>(this.urlApi + `&page=${event}`).pipe(
        map(x => x.results)
      );
  }
}
