import {Component, Input, OnInit} from '@angular/core';
/*import {ActivatedRoute} from "@angular/router";
import {MovieResults} from "../home/home.component";*/

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(/*private route: ActivatedRoute*/) { }

  ngOnInit(): void {
    /*this.route.params.subscribe((params)=>{
      console.log('Params: ', params)

    })*/
    /*this.home.getData().subscribe((response: Array<MovieResults>) => {
      this.movies = response;});*/
  }
}
