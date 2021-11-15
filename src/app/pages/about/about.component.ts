import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HomeService} from '../../shared/services/home.service';
import {MovieResults} from '../../shared/models/interfaces';
import {environment} from '../../../environments/environment';
import {Subject, Subscription} from 'rxjs';
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
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  public ngOnInit(): void {
    this.getParams();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getParams(): Subscription {
    return this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
      const currentId = params.id;
      this.getDetails(currentId);
    });
  }

  private getDetails(currentId: string): Subscription {
    return this.homeService.getById(currentId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: MovieResults) => {
        this.backImgUrl = environment.img_url.background + response.backdrop_path;
        this.posterImg = environment.img_url.poster + response.backdrop_path;
        this.currentMovie = response;
    });
  }
}
