import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portofolio', component: PortofolioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
