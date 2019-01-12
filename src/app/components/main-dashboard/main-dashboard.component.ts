import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import {BillboardService } from '../../services/billboard/billboard.service';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  user:any;
  billBoards:any;
  billBoardsTasks: any;
  constructor( private billBoardServices:BillboardService, private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchUser().subscribe((res)=>{
      console.log(res);
      this.user = JSON.stringify(res);
      this.user = JSON.parse(this.user);
      this.user = (JSON.parse(this.user));
      this.user = this.user.tasks;
      console.log(this.user);
    });

    this.billBoardServices.fetch().subscribe((res)=>{
      this.billBoards = JSON.stringify(res);
      this.billBoards = JSON.parse(this.billBoards);
      this.billBoards = (JSON.parse(this.billBoards));
      this.billBoardsTasks = this.billBoards.tasks;
      console.log(this.billBoards.tasks);
    });

  }

}
