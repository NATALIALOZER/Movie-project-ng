import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
/*import * as _ from 'underscore';
import { PagerService } from '../share'*/


export interface Movie {
  dates?: any;
  page: number;
  results: Array<MovieResults>
  total_results: number;
  total_pages: number;
}

export interface MovieResults {
  adult?:boolean;
  backdrop_path?:string;
  genre_ids?:any[];
  id:number;
  original_language?:string;
  original_title?:string;
  overview:string;
  popularity?:number;
  poster_path?:string;
  release_date:Date;
  title:string;
  video?:boolean;
  vote_average?:number;
  vote_count?:number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private urlApi = environment.urlApi
  movies: MovieResults[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  getData(page:number): Observable<Array<MovieResults>> {
    return this.http.get<Movie>(this.urlApi+`&page=${page}`).pipe(
      map(x => x.results)
    );
  }

  ngOnInit(): void {

    this.getData(3).subscribe((response: Array<MovieResults>) => {
      console.log(response);
      this.movies = response;
    }, (error) => {
      console.log('error', error);
    }, () => {
      console.log('complete');
    });

  }
}
