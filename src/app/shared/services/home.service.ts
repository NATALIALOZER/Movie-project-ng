import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Movie,  MovieResults} from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(
    private http: HttpClient
  ) { }

  public getMovies(page: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment._url}/${environment.searchApi}?api_key=${environment.apiKey}&language=${environment.language}&page=${page.toString()}`);
  }

  public getById(id: string): Observable<MovieResults> {
    return this.http.get<MovieResults>(`${environment._url}/${id}?api_key=${environment.apiKey}&language=e${environment.language}`);
  }
}
