import { Component, OnInit } from '@angular/core';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { GetDataService } from '../common/service/get-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-search-swipe',
  templateUrl: './search-swipe.component.html',
  styleUrls: ['./search-swipe.component.css']
})
export class SearchSwipeComponent implements OnInit {

  public user_list: any;
  public right_icon = faCircleChevronRight;
  public left_icon = faCircleChevronLeft;
  public profile_count: any;

  

  constructor(public getData: GetDataService) { }
  
  ngOnInit(): void {
    this.getData.getUsers().subscribe((data) => {
      this.user_list = data;
      this.profile_count = this.user_list.length
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoWidth:true,
    dots: false,
    navSpeed: 700,
    navText:["<strong><</strong>","<strong>></strong>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items:2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
