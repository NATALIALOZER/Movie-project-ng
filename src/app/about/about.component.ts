import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieResults} from "../home/home.component";
import {HomeService} from "../home/home.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public current_movie: MovieResults[] = []

  constructor(private route: ActivatedRoute, private home: HomeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      /*console.log('Params: ', params)*/
      let current_id = params.id
      let current_page = params.page
      this.home.getById(current_page).subscribe((response: Array<any>) => {
        /*console.log(response.filter(el=>el.id == current_id));*/
        this.current_movie = response.filter(el=>el.id == current_id);
      });
    })
  }
}
