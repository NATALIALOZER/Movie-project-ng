import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';


export interface Movie {
  dates?: any;
  page: number;
  results: Array<MovieResults>
  total_results: number;
  total_pages: number;
}

export interface MovieResults {
  applyClass: string;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: any[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path?: string;
  release_date: Date;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private urlApi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&language=en-US'
  movies: MovieResults[] = [];
  data: any;
  length: number = 0
  listToggle = false;

  constructor(
    private http: HttpClient,
  ) {
  }


  getData(): Observable<Array<MovieResults>> {
    return this.data = this.http.get<Movie>(this.urlApi + `&page=1`).pipe(
      map(x => x.results)
    )
  }

  getDataEvent(event: PageEvent): Observable<Array<MovieResults>> {
    if(event){
      this.data = this.http.get<Movie>(this.urlApi + `&page=${event.pageIndex+1}`).pipe(
      map(x => x.results)
    ).subscribe((response: Array<MovieResults>) => {
      this.movies = response;});
      console.log(this.data)
    }
    return this.data
  }

  getResponse(): Observable<any> {
    return this.http.get<any>(this.urlApi).pipe(tap(response => {
        response.total_results
      }
    ))
  }

  ngOnInit(): void {
    this.getData().subscribe((response: Array<MovieResults>) => {
      this.movies = response;});
      this.getResponse().subscribe((res: any) => {
        this.length = res.total_results
      })
  }
}
