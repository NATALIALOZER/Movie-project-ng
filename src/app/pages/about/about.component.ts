import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HomeService} from '../home/home.service';
import {MovieResults} from '../../shared/models/interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public currentMovie: MovieResults[] = [];

  constructor(private route: ActivatedRoute, private home: HomeService) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const currentId: string = params.id;
      const currentPage = params.page;
      this.home.getById(currentPage).subscribe((response: any[]) => {
        /*console.log(response.filter(el=>el.id == current_id));*/
        this.currentMovie = response.filter(el => el.id === +currentId);
      });
    });
  }
}
