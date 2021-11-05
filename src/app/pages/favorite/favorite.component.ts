import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/app/shared/models/interfaces';

import {FavoriteService} from '../../shared/film/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  public favorites: Favorites[] = [];

  constructor( private fav: FavoriteService) { }

  public ngOnInit(): void {
    this.favorites = this.fav.getAll();
  }
}
