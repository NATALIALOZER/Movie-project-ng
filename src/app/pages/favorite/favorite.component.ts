import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieResults} from 'src/app/shared/models/interfaces';
import {FavoriteService} from '../../shared/services/favorite.service';
import {HomeService} from '../../shared/services/home.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit, OnDestroy {
  public favorites: MovieResults[] = [];
  private sub: Subscription = new Subscription();

  constructor(
    private favoriteService: FavoriteService,
    private homeService: HomeService
  ) {}

  public ngOnInit(): void {
    const favor = this.favoriteService.get('Favorites: ');
    if (favor) {
      favor.forEach((items: string) => {
        this.sub = this.homeService.getById(items).subscribe(
          (movie: MovieResults) => {
            this.favorites.push(movie);
          }
        );
      });
    }
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
