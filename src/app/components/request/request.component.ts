import { Component, OnInit } from '@angular/core';
import { RequestsService }  from '../../services/requests/requests.service';
import { AuthService } from '../../services/auth.service';
import { BillboardService } from '../../services/billboard/billboard.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requests: any;
  billBoard: any;
  constructor( private requestService: RequestsService, private billBoardService: BillboardService ,private authService:AuthService, private request: RequestsService) { 
   this.getData();
  }

  getData() {
    const data = {
      'user_id': this.authService.getUserData().userid
    }
    this.request.readByAddOwner(data).subscribe((res)=>{
      this.requests = JSON.stringify(res);
      this.requests = JSON.parse(this.requests);
      this.requests = (JSON.parse(this.requests));
      this.requests = this.requests.tasks;
      console.log(this.requests);
    })
  }

  ngOnInit() {
  }

  getBillBoardData(id)
  {
    this.billBoardService.fetchBBById(id).subscribe((res)=>{
      this.billBoard = JSON.stringify(res);
      this.billBoard = JSON.parse(this.billBoard);
      this.billBoard = (JSON.parse(this.billBoard));
      this.billBoard = this.billBoard.tasks[0];
      console.log(this.billBoard);
    })
  }


  acceptRequest(id) {
    const data = {id: id};
    console.log(data);
    this.requestService.approveRequest(data).subscribe(()=>{
      console.log('request approved');
      this.getData();
    })
  }

  removeRequest(id) {
    const data = {id : id };
    this.requestService.removeRequest(data).subscribe(()=>{
      console.log('request removed');
      this.getData();
    })
  }

}
