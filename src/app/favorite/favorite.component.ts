import { Component, OnInit } from '@angular/core';
import {FavoriteService} from "../shared/film/favorite.service";


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  public favorites: any[] = []

  constructor(private fav:FavoriteService) { }

  ngOnInit(): void {
    /*console.log(this.fav.getAll())*/
    this.favorites = this.fav.getAll()
  }
}
