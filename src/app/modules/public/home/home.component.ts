import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portofolios } from '../../core/data/portofolio';
import { Portofolio } from '../../core/data/classes/portofolio';

declare function load():any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  portofolio = Portofolios;
  selectedItem : Portofolio;


  constructor( 
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    load()
  }

  onSelect(item: Portofolio): void {
    this.selectedItem = item;
    this.router.navigate([`portofolio/${this.selectedItem.slug}`])
  }
}
