import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatPaginatorModule
    ],
  providers: [

  ]
})
export class HomeModule { }
