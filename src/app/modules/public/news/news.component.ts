import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../core/services/master.service';

declare function slider():any

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data: any;

  constructor(
    private master: MasterService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.master.getData('top-headlines?country=id&category=technology')
    .subscribe(
      res => {
        this.data = res['articles'];
      }
    )
  }

}
