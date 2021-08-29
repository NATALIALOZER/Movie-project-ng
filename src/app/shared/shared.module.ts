import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import {MatCardModule} from "@angular/material/card";
import {HoverClassDirective} from "../directives/hover-class.directive";
import {HomeService} from "../home/home.service";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    FilmComponent,
    HoverClassDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  exports:[FilmComponent],
  providers: [
    HomeService
  ]
})
export class SharedModule { }
