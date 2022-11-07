import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { GetDataService } from '../common/service/get-data.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  public user_details: any;
  public id: any;
  public x_icon = faXmark;

  constructor(private activatedRoute: ActivatedRoute,
    public getData: GetDataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: { [id: string]: any; }) => {
      this.id = params['id'];
    });
    this.getData.getUsers().subscribe((data) => {
      for(let key in data){
        if (data[key].id == this.id){
          this.user_details = data[key];
        }
      }
    })
  }

}
