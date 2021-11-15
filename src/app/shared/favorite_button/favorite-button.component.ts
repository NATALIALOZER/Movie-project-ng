import {Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from '../services/favorite.service';
import {Location} from '@angular/common';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() public id: number = 0;
  @Input() public event!: Event;
  public favorites: any[] = [];

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

  public addToFavorite (event: any): void {
    if (this.auth.isAuthenticated()) {
      const target = event.target;
      const card = target.closest('.card');
      const id = card.id.toString();
      let storage = this.favoriteService.get('Favorites: ');
      if (!storage) {
        storage = [];
      }
      if (!storage.includes(id)) {
        const be = [...storage, id];
        this.favorites = be;
        this.favoriteService.set('Favorites: ', be);
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
    return this.favorites.includes(id.toString());
  }

  public removeFromFavorite (id: number): void {
    const str: string = id.toString();
    const storage = this.favoriteService.get('Favorites: ');
    this.favorites = storage;
    this.favoriteService.set('Favorites: ' , storage.filter( (item: string) => item !== str));
  }

  public checkLocation(): boolean {
    return this.location.path() === '/favorite';
  }
}
