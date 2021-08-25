/*import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {HomeComponent, Movie, MovieResults} from "./home/home.component";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PageEvent} from "@angular/material/paginator";


@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  private urlApi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US'

  data: any

  constructor(
    private http: HttpClient
  ) {}

  /!*choosePage(page:number){
    return this.page = page
  }*!/
  /!*OnPageChange(event:PageEvent) {
    return this.page = event.pageIndex+1
  }*!/


  getDt(event: PageEvent): Observable<Array<MovieResults>> {
    if(!event){
      return this.http.get<Movie>(this.urlApi + `&page=1`).pipe(
        map(x => x.results)
      )
    }
    return this.http.get<Movie>(this.urlApi + `&page=${event.pageIndex}`).pipe(
      map(x => x.results)
    );
  }
  /!*getResponse():Observable<any> {
    return this.http.get<any>(this.urlApi).pipe(tap(response=> {response.total_results}
    ))
  }*!/
}*/
