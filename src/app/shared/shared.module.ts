import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film/film.component';
import {MatCardModule} from "@angular/material/card";
import {HoverClassDirective} from "../directives/hover-class.directive";
import {HomeService} from "../home/home.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HomeRoutingModule} from "../home/home-routing.module";

@NgModule({
  declarations: [
    FilmComponent,
    HoverClassDirective,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HomeRoutingModule,
  ],
  exports:[FilmComponent,HeaderComponent],
  providers: [
    HomeService
  ]
})
export class SharedModule { }
