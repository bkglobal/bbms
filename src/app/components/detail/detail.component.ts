import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { BillboardService } from '../../services/billboard/billboard.service';
import { getLocaleMonthNames } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RequestsService } from '../../services/requests/requests.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  billBoardData: any;
  bidPrice:any;
  isAgent: any;
  constructor(private flashMessage:FlashMessagesService, private request: RequestsService, private authService: AuthService, private route:ActivatedRoute, private billBoard: BillboardService) { 
    if(this.authService.getUserData())
    {
    if(this.authService.getUserData().role == 1)
    {
      this.isAgent = true;
    }
    else
    {
      this.isAgent = false;
    }
  }
  else{
    this.isAgent = false;
  }
    this.route.params.subscribe(res=>{
      this.billBoard.fetchBBById(res.id).subscribe((result)=>{
        this.billBoardData = JSON.stringify(result);
        this.billBoardData = JSON.parse(this.billBoardData);
        this.billBoardData = (JSON.parse(this.billBoardData));
        this.billBoardData = this.billBoardData.tasks[0];
        console.log(this.billBoardData);
      })

    })

  }

  ngOnInit() {
  }

  placeOrder(billBoardId){
    const data =  {
      'bb_id' : billBoardId,
      'user_id' : this.authService.getUserData().userid
    };
    this.request.addRequest(data).subscribe((res)=>{
      this.flashMessage.show('Your Order is placed successfully. You will be replied soon.', { cssClass: 'alert-success', timeout: 1000 });
    })

  }

}
