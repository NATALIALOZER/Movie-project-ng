import {Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../../shared/services/home.service';
import {Movie, MovieResults} from '../../shared/models/interfaces';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute, Params, Router} from '@angular/router';

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
  private destroy$: Subject<void> = new Subject<void>();
  private params: number = 0;

  constructor(
    private http: HttpClient,
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public getDataEvent(): void {
    let pager = 0;
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        if (params['page'] && +params['page'] !== this.page && +params['page'] !== this.params) {
          this.params = +params['page'];
          pager = this.params;
        } else {
          pager = this.page;
        }
        this.homeService.getMovies(pager)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            (response: Movie) => {
              this.length = +response.total_results;
              this.movies = response.results;
            }
          );
      });

  }

  public ngOnInit(): void {
    this.getDataEvent();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
