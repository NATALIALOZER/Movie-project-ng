import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../../home/home.service";
import {MovieResults} from "../../home/home.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /*@Input() movies: MovieResults[] = [];
  private page: number|undefined;*/

  constructor(private home: HomeService) { }

  ngOnInit(): void {
    /*/!*this.home.getData().subscribe((response: Array<MovieResults>) => {
      this.movies = response;});*!/
    this.home.getResponse().subscribe((res: any) => {
      this.page = res.page
      /!*console.log(this.length)*!/
    })
    console.log(this.page)*/
  }

}
