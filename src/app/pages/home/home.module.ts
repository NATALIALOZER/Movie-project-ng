import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    SharedModule,
    NgbModule
  ],
})
export class HomeModule { }
