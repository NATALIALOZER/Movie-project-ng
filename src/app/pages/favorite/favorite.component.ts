import { Component, OnInit } from '@angular/core';
import {MovieResults} from 'src/app/shared/models/interfaces';
import {FavoriteService} from '../../shared/services/favorite.service';
import {HomeService} from '../../shared/services/home.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  public favorites: MovieResults[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private home: HomeService
  ) {}

  public ngOnInit(): void {
    const favor = this.favoriteService.get('Favorites: ');
    favor.forEach((items: string) => {
      this.home.getById(items).subscribe(
        (movie: MovieResults) => {
          this.favorites.push(movie);
        }
      );
    });
  }
}
