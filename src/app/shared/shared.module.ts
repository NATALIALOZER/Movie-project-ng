import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './components/film/film.component';
import {MatCardModule} from '@angular/material/card';
import {HoverClassDirective} from './directives/hover-class.directive';
import {HomeService} from './services/home.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HomeRoutingModule} from '../pages/home/home-routing.module';
import { FavoriteButtonComponent } from './components/favorite_button/favorite-button.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  declarations: [
    FilmComponent,
    HoverClassDirective,
    HeaderComponent,
    FavoriteButtonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
    exports: [FilmComponent, HeaderComponent, FavoriteButtonComponent, HttpClientModule],
  providers: [
    HomeService,
    AuthService,
    AuthGuard,

  ]
})
export class SharedModule { }
