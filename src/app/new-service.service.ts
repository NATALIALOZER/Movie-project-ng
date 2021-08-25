import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Movie, MovieResults} from "./home/home.component";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  private urlApi = environment.urlApi
  page: number = 1;

  constructor(
    private http: HttpClient
  ) {}

  /*choosePage(page:number){
    return this.page = page
  }*/
  /*OnPageChange(event:PageEvent) {
    return this.page = event.pageIndex+1
  }*/

  getData(): Observable<Array<MovieResults>> {
    return this.http.get<Movie>(this.urlApi + `&page=${this.page}`).pipe(
      map(x => x.results)
    );
  }
  getResponse():Observable<any> {
    return this.http.get<any>(this.urlApi).pipe(tap(response=> {response.total_results}
    ))
  }
}
