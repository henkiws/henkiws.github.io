import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CarouselModule} from "ngx-carousel-lib";

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    HomeComponent,
    PortofolioComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ]
})
export class PublicModule { }
