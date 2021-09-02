import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {SharedModule} from "../shared/shared.module";
import {AboutRoutingModule} from "./about-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ]
})
export class AboutModule { }
