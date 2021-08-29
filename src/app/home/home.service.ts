import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Movie, MovieResults} from "./home.component";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlApi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US'

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<MovieResults>> {
    return this.http.get<Movie>(this.urlApi + `&page=1`).pipe(
      map(x => x.results)
    )
  }

  getResponse(): Observable<any> {
    return this.http.get<any>(this.urlApi).pipe(tap(response => {
        response.total_results
      }
    ))
  }
}
