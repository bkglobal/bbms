import { Component, OnInit } from '@angular/core';
import { RequestsService }  from '../../services/requests/requests.service';
import { AuthService } from '../../services/auth.service';
import { BillboardService } from '../../services/billboard/billboard.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  enableFeedback: any = false;
  feedback: any;
  orders: any;
  billBoard: any;
  selectedBBID : any;
  isFeedbackRead: any = null;
  constructor( private billBoardService: BillboardService, private authService: AuthService, private request:RequestsService) {
    
    this.getData();
   }

   feedbackDisable() {
     this.enableFeedback = false;
   }

   feedbackEnable() {
     this.enableFeedback= true;
   }

  private getData() {
    const data = {
      'user_id': this.authService.getUserData().userid
    }
    console.log(data);
    this.request.readByAddAgent(data).subscribe((res) => {
      this.orders = JSON.stringify(res);
      this.orders = JSON.parse(this.orders);
      this.orders = (JSON.parse(this.orders));
      this.orders = this.orders.tasks;
      console.log(this.orders);
    });
  }

  ngOnInit() {
  }

  removeRequest(id) {
    const data = {id : id };
    this.request.removeRequest(data).subscribe(()=>{
      console.log('request removed');
      this.getData();

    });

  }
  feedbackSend() {
    this.request.sendFeedback(this.selectedBBID, this.feedback).subscribe(data => {
      console.log('res get ', data);
      this.isFeedbackRead = false;
    });
  }


  getBillBoardData(id, orderid, fbread)
  {
    this.selectedBBID = orderid;
    console.log('fbread ois  :', orderid , fbread);
    this.isFeedbackRead = fbread;
    this.billBoardService.fetchBBById(id).subscribe((res)=>{
      this.billBoard = JSON.stringify(res);
      this.billBoard = JSON.parse(this.billBoard);
      this.billBoard = (JSON.parse(this.billBoard));
      this.billBoard = this.billBoard.tasks[0];
      console.log(this.billBoard);
    })
  }

  isBillboardAvailable() {

  }
}
