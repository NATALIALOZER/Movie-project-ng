import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {SharedModule} from "../shared/shared.module";
import {AboutRoutingModule} from "./about-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AboutRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MatCardModule
  ]
})
export class AboutModule { }
