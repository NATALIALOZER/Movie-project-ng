import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../shared/services/home.service';
import {Movie, MovieResults} from '../../shared/models/interfaces';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  public currentMovie!: MovieResults;
  public backImgUrl: string = '';
  public posterImg: string = '';
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  public ngOnInit(): void {
    this.getDetails(this.route.snapshot.paramMap.get('id') as string);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public back(): void {
    const page = this.route.snapshot.paramMap.get('page');
    this.router.navigate(['/home'], { queryParams: { page }});
  }

  public next(): void {
    const page: string = this.route.snapshot.paramMap.get('page') as string;
    const currentId: string = this.route.snapshot.paramMap.get('id') as string;
    this.homeService.getMovies(+page)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (response: Movie) => {
        let position: number = 0;
        const movies = response.results;
        const index = movies.find((item: MovieResults) => item.id === +currentId);
        if (index) {
          position = movies.indexOf(index) + 1;
          if (!movies[position]) {
            position = 0;
          }
          const item: MovieResults = movies[position];
          this.router.navigate(['/about', page, item.id]);
          this.getDetails(item.id.toString());
        }
      }
    );
  }

  private getDetails(id: string): void {
    this.homeService.getById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: MovieResults) => {
        this.currentMovie = response;
        this.backImgUrl = environment.img_url.background + response.backdrop_path;
        this.posterImg = environment.img_url.poster + response.poster_path;
    });
  }
}
