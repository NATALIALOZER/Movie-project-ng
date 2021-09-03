
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
  /*private carddata: any;*/

  constructor(private fav: FavoriteService, location: Location, private home: HomeService) {
    this.location = location;
  }


  ngOnInit(): void {
    console.log(this.page)

    /*    this.home.getResponse().subscribe((res: any) => {
          this.page = res.page
          console.log(this.page)
        })*/

  }

  addToFavorite(event: any) {
    let target = event.target;
    let card = target.closest('.card')
    let id = card.id
    let storage: any = {};
    let m_title = card.getElementsByClassName("mat-card-title")[0]
    let m_description = card.getElementsByClassName("desc")[0]
    let m_ratings = card.getElementsByClassName("ratings")[0]
    let m_poster = card.getElementsByClassName("card-img")[0]
    storage['id'] = id
    storage['title'] = m_title.innerHTML
    storage['overview'] = m_description.innerHTML
    storage['ratings'] = m_ratings.innerHTML
    storage['poster_path'] = m_poster.src
    this.fav.set(id, storage)
    /*localStorage.clear()*/
  }

  removeFromFavorite(id: number) {
    let str: string = id.toString()
    location.reload()
    return this.fav.remove(str)
  }

  checkFav(id: number): boolean {
    return !!this.fav.get(id);
  }

  checkLocation() {
    return this.location.path() === '/favorite'
  }

  /*openModal(event:any) {
    if(event.target.closest(".card")){
      console.log(event.target.closest(".card"))
      let dialog =
      this.dialog.open(event.target)
    }
  }*/


  openDetails(event:any) {
    /*if(event.target.closest(".card")){
      this.carddata = event.target.closest(".card")
    }*/
  }

}
