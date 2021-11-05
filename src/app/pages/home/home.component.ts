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
  public subscription?: Subscription;
  public toggle: boolean = false;
  constructor(
    private http: HttpClient,
    private home: HomeService
  ) {
  }

  public getDataEvent(event: number): [(Subscription | undefined), number] {
    if (event) {
      this.page = event;
      this.subscription = this.home.getDataEvent(event).subscribe((response: MovieResults[]) => {
        this.movies = response;
      });
    }
    return [this.subscription, this.page];
  }

  public ngOnInit(): void {
    this.home.getData().subscribe((response: MovieResults[]) => {
      this.movies = response;
    });
    this.home.getResponse().subscribe((res: Movie) => {
      this.length = res.total_results;
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
