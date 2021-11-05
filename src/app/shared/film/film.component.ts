import {Component, Input, OnInit} from '@angular/core';
import {FavoriteService} from './favorite.service';
import {Location} from '@angular/common';
import {HomeService} from '../../pages/home/home.service';
import {MovieResults} from '../models/interfaces';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  @Input() public movies: MovieResults[] = [];
  @Input() public page: any;
  @Input() public toggle: boolean = false;

  constructor( private fav: FavoriteService,
               private location: Location ) {
    this.location = location;
  }

  public checkLocation(): boolean {
    return this.location.path() === '/favorite';
  }

  public openDetails(event: Event): void {

  }
}
