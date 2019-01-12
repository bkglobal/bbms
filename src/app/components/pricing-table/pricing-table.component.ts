import { Component, OnInit } from '@angular/core';
import { PRICING_TABLE } from '../../config/pricing_table';
import { ActivatedRoute } from '@angular/router';
import {  AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {
  pricing_table : any;
  duration_1:any="monthly";
  duration:any;
  user:any;
  constructor(private router:Router, private route:ActivatedRoute, private flashMessage:FlashMessagesService, private authService:AuthService) {
    this.pricing_table = PRICING_TABLE;
    this.duration = this.pricing_table.monthly;


    this.route.params.subscribe(res=>{
      console.log(res);
      this.user = JSON.parse(res.data);
    });


   }
  ngOnInit() {
  }

  changeButton(){
    console.log(this.duration_1);
    if(this.duration_1 == "monthly")
    {
      this.duration = this.pricing_table.monthly;
    }
    else if(this.duration_1 == "yearly")
    {
      this.duration = this.pricing_table.yearly;
    }
  }

  selectPackage(key)
  {

    console.log(this.user);
    this.user['package']=key;
    console.log(this.user);
    this.authService.registerUser(this.user).subscribe(data => {
      if (data) {
        // this.flashMessage.show('Logged in. Please wait...', { cssClass: 'alert-Success', timeout: 1000 });

        // alert("User registerd successfully", data);
        this.flashMessage.show('Registered Successfully.', { cssClass: 'alert-danger', timeout: 1000 });

        this.router.navigate(['/login',{data:0}],{skipLocationChange:true});
      }
      else {
        alert("Error subscription" + data);
        this.flashMessage.show('Error Subscription', { cssClass: 'alert-danger', timeout: 1000 });

      }
    })

  }

}
