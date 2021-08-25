import { Component, OnInit } from '@angular/core';
import {NewServiceService} from "../new-service.service";
import {PageEvent} from "@angular/material/paginator";


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
  /*private urlApi = environment.urlApi*/
  movies: MovieResults[] = [];
  totalResults: any;
  /*page: number = 1;
  pager: any = {};*/
  /*pagedItems: any[] = [];*/
  svc:any;
  /*public pageSlice = this.carditems.slice(0,20)*/

  constructor(
    /*private http: HttpClient,*/
    svc:NewServiceService
  ) {
    this.svc = svc
  }

  ngOnInit(): void {
    this.svc.getData().subscribe((response: Array<MovieResults>) => {
      this.movies = response;
      console.log(this.movies)
      this.svc.getResponse().subscribe((res:any)=> {
        this.totalResults = res.total_results
      })
    }, /*(error) => {
      console.log('error', error);
    }, () => {
      console.log('complete');
    }*/);
  }

  OnPageChange(event:PageEvent) {
    console.log(this.svc.page)
    const startIndex = 0
    let endIndex = 20
    if (endIndex> this.movies.length){
      endIndex=this.movies.length;
    }
    return this.svc.page = event.pageIndex+1
  }

  /*OnPageChange(event:PageEvent) {
    /!*if (page < 1 || page > this.totalPages) {
      return;
    }*!/
     console.log(event.pageIndex+1)
    // get pager object from service
    /!*this.pager = this.pagerService.getPager(this.totalPages, page);*!/

    // get current page of items
    /!*this.pagedItems = this.movies.slice(this.pager.startIndex, this.pager.endIndex + 1);*!/
    /!*this.pagedItems = this.movies;*!/
  }*/
}
