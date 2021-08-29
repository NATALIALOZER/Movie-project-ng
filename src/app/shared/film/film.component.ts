
import {Component, Input, OnInit} from '@angular/core';
import {MovieResults} from "../../home/home.component";
import {HomeService} from "../../home/home.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() movies: MovieResults[] = [];

  constructor(private home: HomeService) { }


  ngOnInit(): void {

  }
}
