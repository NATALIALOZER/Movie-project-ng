import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { HomeService } from './home.service';
import {environment} from "../../environments/environment";
/*import {ActivatedRoute} from "@angular/router";*/


export interface Movie {
  dates?: any;
  page: number;
  results: Array<MovieResults>
  total_results: number;
  total_pages: number;
}

export interface MovieResults {
  ratings: any;
  applyClass: string;
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: any[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
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
  private urlApi = environment.urlApi
  public movies: MovieResults[] = [];
  public data: any;
  length: number = 0
  public page: any;


  constructor(
    private http: HttpClient,
    private home: HomeService
  ) {
  }


  getDataEvent(event: PageEvent): any[] {
    if(event){
      this.page = event.pageIndex+1
      this.data = this.http.get<Movie>(this.urlApi + `&page=${event.pageIndex+1}`).pipe(
        map(x => x.results)
      ).subscribe((response: Array<MovieResults>) => {
        this.movies = response;});

    }
    /*console.log(this.page)*/
    return [this.data, this.page]
  }



  ngOnInit(): void {

    this.home.getData().subscribe((response: Array<MovieResults>) => {
      this.movies = response;});
    this.home.getResponse().subscribe((res: any) => {
      this.length = res.total_results
      /*console.log(this.length)*/
    })

  }

  toggleClass = (event:any) => {
    let mainBodyClass = event.target.parentElement.parentElement.getElementsByClassName('changer')[0]
    let changer = mainBodyClass.firstChild.firstChild
    changer.classList.toggle('main-list');
    changer.classList.toggle('main-blocks');
  }
}
