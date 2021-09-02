
import {Component, Input, OnInit, Output} from '@angular/core';
import {MovieResults} from "../../home/home.component";
import {FavoriteService} from "./favorite.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() movies: MovieResults[] = [];

  location: Location;

  constructor(private fav:FavoriteService,location: Location) {this.location = location; }

  ngOnInit(): void {

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
    storage['id']= id
    storage['title'] = m_title.innerHTML
    storage['overview'] = m_description.innerHTML
    storage['ratings'] = m_ratings.innerHTML
    storage['poster_path'] = m_poster.src
    this.fav.set(id, storage)
    /*localStorage.clear()*/
  }

  removeFromFavorite(id:number) {
    let str: string = id.toString()
    location.reload()
    return this.fav.remove(str)
  }

  checkFav(id:number): boolean {
    return !!this.fav.get(id);
  }

  checkLocation() {
    return this.location.path()==='/favorite'
  }

  /*openModal(event:any) {
    if(event.target.closest(".card")){
      console.log(event.target.closest(".card"))
      let dialog =
      this.dialog.open(event.target)
    }
  }*/
  openDetails(id:number) {

  }
}
