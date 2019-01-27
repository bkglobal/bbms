import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillboardService } from '../../services/billboard/billboard.service';
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
  ratingValue: any = 0;
  billBoardData: any;
  bidPrice: any;
  isAgent: any;
  suggestData:any;
  constructor(private router:Router, private flashMessage: FlashMessagesService, private request: RequestsService, private authService: AuthService, private route: ActivatedRoute, private billBoard: BillboardService) {
    if (this.authService.getUserData()) {
      if (this.authService.getUserData().role == 1) {
        this.isAgent = true;
      }
      else {
        this.isAgent = false;
      }
    }
    else {
      this.isAgent = false;
    }
    this.route.params.subscribe(res => {
      this.billBoard.fetchBBById(res.id).subscribe((result) => {
        this.billBoardData = JSON.stringify(result);
        this.billBoardData = JSON.parse(this.billBoardData);
        this.billBoardData = (JSON.parse(this.billBoardData));
        this.billBoardData = this.billBoardData.tasks[0];
        console.log("the data : ", this.billBoardData);
        this.billBoard.fetchBillboardConditional(this.billBoardData["price"], this.billBoardData["width"], this.billBoardData["height"]).subscribe(resu =>{
          console.log('final resullt got ', resu);
          this.suggestData = JSON.stringify(resu);
        this.suggestData = JSON.parse(this.suggestData);
        this.suggestData = (JSON.parse(this.suggestData));
        this.suggestData = this.suggestData.tasks;
        console.log('suggest dat: ', this.suggestData);
        })

      })

    });




  }

  ngOnInit() {
  }

  placeOrder(billBoardId) {
    const data = {
      'bb_id': billBoardId,
      'user_id': this.authService.getUserData().userid
    };
    this.request.addRequest(data).subscribe((res) => {
      this.flashMessage.show('Your Order is placed successfully. You will be replied soon.', { cssClass: 'alert-success', timeout: 1000 });
    })

  }


  rateBillboard(ev, id, currentRating) {
    console.log(ev.target.defaultValue);
    this.billBoard.rateBillboard(ev.target.defaultValue, id, currentRating).subscribe(res => {
      console.log(res);
    });
  }

  goToDetail(id) {
    console.log('detail is : ', id);
    this.router.navigate(['/detail/'+id]);
  } 
}
