
import {Component, Input, OnInit} from '@angular/core';
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

  /*favorites: any[] = []*/

  constructor(private fav:FavoriteService,location: Location) {this.location = location; }


  ngOnInit(): void {
  }

  addToFavorite(event: any) {
    let target = event.target;
    let card = target.closest('.card')
    let id = card.id
    let storage: any = {};
    let m_title = card.getElementsByClassName("mat-card-title")[0]
    let m_description = card.getElementsByClassName("mat-card-content")[0]
    let m_poster = card.getElementsByClassName("card-img")[0]
    storage['id']= id
    storage['title'] = m_title.innerHTML
    storage['overview'] = m_description.innerHTML
    storage['poster_path'] = m_poster.src
    console.log(storage['title'],storage['overview'])
    this.fav.set(id, storage)

    /*localStorage.clear()*/
  }

  removeFromFavorite(id:any) {
    console.log(id)
    location.reload()
    return this.fav.remove(id)
  }

  checkFav(id:any): any {
    return !!this.fav.get(id);
  }

  /*checkRemove(id:any):any{
    return !!this.fav.get(id);
  }*/


  checkLocation() {
    return this.location.path()==='/favorite'
  }
}
