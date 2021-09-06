
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MovieResults} from "../../home/home.component";
import {FavoriteService} from "./favorite.service";
import {Location} from "@angular/common";
import {HomeService} from "../../home/home.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() movies: MovieResults[] = [];
  @Input() page: any;
  location: Location;

  constructor(private fav: FavoriteService, location: Location, private home: HomeService) {
    this.location = location;
  }

  ngOnInit(): void {
    /*console.log(this.page)*/
  }



  checkLocation() {
    return this.location.path() === '/favorite'
  }

  openDetails(event:any) {

  }
}
