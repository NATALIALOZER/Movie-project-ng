import {Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {Location} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() public id: number = 0;
  private favorites: string[] = [];


  constructor(
    private favoriteService: FavoriteService,
    private location: Location,
    private auth: AuthService,
    private router: Router
  ) {
    this.location = location;
  }

  public ngOnInit(): void {
  }

  public addToFavorite (): void {
    if (this.auth.isAuthenticated()) {
      this.favorites = this.favoriteService.get('Favorites: ');
      if (!this.favorites) {
        this.favorites = [];
      }
      if (!this.favorites.includes(this.id.toString())) {
        this.favorites = [...this.favorites, this.id.toString()];
        this.favoriteService.set('Favorites: ', this.favorites);
      }
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          loginAgain: true
        }
      });
    }
  }

  public checkFav(id: number): boolean {
    if (this.favorites) {
      return this.favorites.includes(id.toString());
    } else {
      return false;
    }
  }

  public checkLocation(): boolean {
    return this.location.path() === '/favorite';
  }

  public removeFromFavorite (id: number): void {
    this.favorites = this.favoriteService.get('Favorites: ');
    const str: string = id.toString();
    this.favoriteService.set('Favorites: ' , this.favorites.filter( (item: string) => item !== str));
    this.favoriteService.removeFavorites$.next();
  }
}
