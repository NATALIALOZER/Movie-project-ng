import {Component, Input} from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {Location} from '@angular/common';
import {MovieResults} from '../../models/interfaces';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  @Input() public movies: MovieResults[] = [];
  @Input() public page: number = 0;
  @Input() public toggle: boolean = false;

  public locationPath: string;

  constructor(
    private fav: FavoriteService,
    private location: Location
  ) {
    this.location = location;
    this.locationPath = location.path();
  }

  public checkLocation(): boolean {
    return this.location.path() === '/favorite';
  }


}
