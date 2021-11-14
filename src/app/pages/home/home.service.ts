import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Movie,  MovieResults} from '../../shared/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private searchApi = 'now_playing';
  private language = 'en-US';

  constructor(private http: HttpClient) { }

  public getMovies(page: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment._url}/${this.searchApi}?api_key=${environment.apiKey}&language=${this.language}&page=${page.toString()}`);
  }

  public getById(id: string): Observable<MovieResults> {
    return this.http.get<MovieResults>(`${environment._url}/${id}?api_key=${environment.apiKey}&language=e${this.language}`);
  }
}
