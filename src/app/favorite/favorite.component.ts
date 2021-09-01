import { Component, OnInit } from '@angular/core';
import {FavoriteService} from "../shared/film/favorite.service";

export interface Favorites {
  id: any;
  title: string;
  overview: string
  ratings: string;
  poster_path: string;
  applyClass: string;
  release_date: Date;
  adult: boolean;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  public favorites: Favorites[] = []

  constructor(private fav:FavoriteService) { }

  ngOnInit(): void {
    this.favorites = this.fav.getAll()
  }
}
