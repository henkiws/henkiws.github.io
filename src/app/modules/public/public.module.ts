import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

@NgModule({
  declarations: [
    HomeComponent,
    PortofolioComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
