import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../../core/services/master.service';
import { CarouselComponent } from "ngx-carousel-lib";

declare function slider():any

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data: any
  @ViewChild("topCarousel") topCarousel: CarouselComponent;
  public degree = 25;
  public moreSlides = 3;


  constructor(
    private master: MasterService
  ) { }

  ngOnInit() {
    // this.topCarousel.toggleMode();
    // slider()
    this.getData()
  }

  getData(){
    this.master.getData('/top-headlines?country=id&category=technology')
    .subscribe(
      res => {
        this.data = res['articles']
        // let arr = []
        // let i = 0
        // res['articles'].forEach(el => {
        //   if(i < 10) arr.push(el)
        //   i = i++
        // });
        // this.data = arr
        // console.log(this.data)
      }
    )
  }

}
