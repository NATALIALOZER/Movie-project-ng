import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './home.service';
import {Movie, MovieResults} from '../../shared/models/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: MovieResults[] = [];
  public length: number = 0;
  public page: number = 1;
  public toggle: boolean = false;
  private sub: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private homeService: HomeService
  ) {}

  public getDataEvent(event: number): Subscription {
    this.page = event;
    return this.sub = this.homeService.getMovies(this.page).subscribe(
      (response: Movie) => {
        this.length = +response.total_results;
        this.movies = response.results;
      }
    );
  }

  public ngOnInit(): void {
    this.getDataEvent(this.page);
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
