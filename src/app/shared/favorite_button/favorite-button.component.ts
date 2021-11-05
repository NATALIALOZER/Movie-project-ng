import {Component, Input, OnInit} from '@angular/core';

import {FavoriteService} from '../film/favorite.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() public id: any;
  @Input() public event: any;

  constructor( private fav: FavoriteService,
               private location: Location
  ) {
    this.location = location;
  }

  public ngOnInit(): void {
  }

  public addToFavorite (event: any): void {
    const target = event.target;
    const card = target.closest('.card');
    const id = card.id;
    const storage: any = {};
    const m_title = card.getElementsByClassName('mat-card-title')[0];
    const m_ratings = card.getElementsByClassName('ratings')[0];
    const m_poster = card.getElementsByClassName('card-img')[0];
    const m_description = card.getElementsByClassName('desc')[0];
    storage['overview'] = m_description.innerHTML;
    storage['id'] = id;
    storage['title'] = m_title.innerHTML;
    storage['ratings'] = m_ratings.innerHTML;
    storage['poster_path'] = m_poster.src;
    this.fav.set(id, storage);
  }

  public checkFav(id: number): boolean {
    return this.fav.get(id);
  }
  public removeFromFavorite (id: number) {
    const str: string = id.toString();
    location.reload();
    return this.fav.remove(str);
  }

  public checkLocation(): boolean {
    return this.location.path() === '/favorite';
  }
}
