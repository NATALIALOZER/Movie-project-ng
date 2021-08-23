import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, tap} from 'rxjs/operators';
import {Observable} from "rxjs";
import { PagerService } from '../share/pager.service'


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
  totalPages: any;


  constructor(
    private http: HttpClient,
    private pagerService: PagerService
  ) { }

  pager: any = {};
  pagedItems: any[] = [];

  getData(): Observable<Array<MovieResults>> {
    return this.http.get<Movie>(this.urlApi+`&page=${1}`).pipe(
      map(x => x.results)
    );
  }
  getResponse():Observable<any> {
    return this.http.get<any>(this.urlApi).pipe(tap(response=> {response.total_pages}
    ))
  }

  ngOnInit(): void {
    this.getData().subscribe((response: Array<MovieResults>) => {
      this.movies = response;
      this.getResponse().subscribe((res:any)=> {
        this.totalPages = res.total_pages
        this.setPage(1);
      })
    }, (error) => {
      console.log('error', error);
    }, () => {
      console.log('complete');
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.totalPages, page);

    // get current page of items
    /*this.pagedItems = this.movies.slice(this.pager.startIndex, this.pager.endIndex + 1);*/
    this.pagedItems = this.movies;
  }
}
