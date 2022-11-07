import { Component, OnInit } from '@angular/core';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { GetDataService } from '../common/service/get-data.service';

@Component({
  selector: 'app-swipe-screen',
  templateUrl: './swipe-screen.component.html',
  styleUrls: ['./swipe-screen.component.css']
})
export class SwipeScreenComponent implements OnInit {

  public user_list: any;
  public user_option: string ='';
  public alert:boolean = false;
  public star_icon = faStar; 
  public x_icon = faXmark;
  public check_icon = faCheck;

  constructor(public getData: GetDataService) { }

  ngOnInit(): void {
    this.getData.getUsers().subscribe((data) => {
      this.user_list = data;
    })
  }

  action(user_option: string, id:any) {
    this.user_option = user_option;
    this.alert = true;
    setTimeout (() => {
      this.alert = false;
   }, 2000);
   for (let index in this.user_list){
    if (this.user_list[index].id == id){
        this.user_list.splice(index,1);
    }
   }
    }

}
