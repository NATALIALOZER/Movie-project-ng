import {Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from "../film/favorite.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() id: any
  @Input() event: any
  location: Location;

  constructor(private fav: FavoriteService,location: Location) {this.location = location; }

  ngOnInit(): void {
  }

  addToFavorite(event: any) {
    let target = event.target;

    let card = target.closest('.card')
    let id = card.id
    let storage: any = {};
    let m_title = card.getElementsByClassName("mat-card-title")[0]
    let m_ratings = card.getElementsByClassName("ratings")[0]
    let m_poster = card.getElementsByClassName("card-img")[0]
    let m_description = card.getElementsByClassName("desc")[0]


    storage['overview'] = m_description.innerHTML
    storage['id'] = id
    storage['title'] = m_title.innerHTML
    storage['ratings'] = m_ratings.innerHTML
    storage['poster_path'] = m_poster.src
    this.fav.set(id, storage)
    console.log(card)
    /*let burn = document.getElementsByClassName('favorite-icon')[0]
    burn.remove()*/
    /*localStorage.clear()*/
  }

  checkFav(id: number): boolean {
    return this.fav.get(id);
  }
  removeFromFavorite(id: number) {
    let str: string = id.toString()
    location.reload()
    return this.fav.remove(str)
  }

  checkLocation() {
    return this.location.path() === '/favorite'
  }

}
