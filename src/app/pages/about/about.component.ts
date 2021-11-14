import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HomeService} from '../home/home.service';
import {MovieResults} from '../../shared/models/interfaces';
import {environment} from '../../../environments/environment';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  public currentMovie!: MovieResults;
  public backImgUrl: string = '';
  public posterImg: string = '';
  private paSub: Subscription = new Subscription();
  private dSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  public ngOnInit(): void {
    this.getParams();
  }

  public ngOnDestroy(): void {
      this.dSub.unsubscribe();
      this.paSub.unsubscribe();
  }

  private getParams(): Subscription {
    return this.paSub = this.route.params.subscribe((params: Params) => {
      const currentId = params.id;
      setTimeout(() => {
        this.getDetails(currentId);
      }, 200);
    });
  }

  private getDetails(currentId: string): Subscription {
    return this.dSub = this.homeService.getById(currentId)
      .subscribe((response: MovieResults) => {
        this.backImgUrl = environment.img_url.background + response.backdrop_path;
        this.posterImg = environment.img_url.poster + response.backdrop_path;
        this.currentMovie = response;
    });
  }
}
