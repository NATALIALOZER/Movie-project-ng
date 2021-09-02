import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Movie, MovieResults} from "./home.component";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlApi = environment.urlApi

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

  /*getById(id:number){
    return this.http
  }*/
}
