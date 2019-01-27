import { Component, OnInit } from '@angular/core';
import {  BillboardService } from  '../../services/billboard/billboard.service';
import { Router } from '@angular/router';
import   {AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ITEM_COUNT = 3;
  arrFeaturedItems: any = [];
  arrFeaturedItemsActive:any = [];
  arrLatestItems: any = [];
  allBillBoards : any;
  id: any;
  package:any;
  expiredBB: any;
  featureItems: any = [{ title: "ABC item", image: "#", description: "ABC item desc." },
  { title: "ABC item", image: "#", description: "ABC item desc.", price:"100" },
  { title: "ABC item", image: "#", description: "ABC item desc.", price:"100" },
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"},
  { title: "ABC item", image: "#", description: "ABC item desc." , price:"100"}];

  constructor(private authService: AuthService, private router: Router, private billBoardServices : BillboardService) {
    // window.location.reload();
    this.id = this.authService.getUserData().userid;
    this.billBoardServices.fetch().subscribe((res)=>{
    this.allBillBoards = JSON.stringify(res);
      this.allBillBoards = JSON.parse(this.allBillBoards);
      this.allBillBoards = (JSON.parse(this.allBillBoards));
      this.allBillBoards = this.allBillBoards.tasks;
      console.log(this.allBillBoards.tasks);

    });


    

    this.billBoardServices.fetchBillboardQuery('select package from userprofile where uid = '+ this.id).subscribe(res =>{
      console.log("user is : ",res);
      this.package = JSON.stringify(res);
      this.package = JSON.parse(this.package);
      this.package = (JSON.parse(this.package));
      this.package = this.package.tasks[0].package;
      console.log("current package iS: ",this.package);
      this.getTimePackage(this.package);
    }); 
    
   }



  getTimePackage(pkg) {
    if(pkg == 'monthly1')
    {
      this.billBoardServices.fetchBillboardQuery('SELECT * FROM `billboard` WHERE date < CURDATE()-25').subscribe(res=>{
        console.log("user is : ",res);
        this.expiredBB = JSON.stringify(res);
        this.expiredBB = JSON.parse(this.expiredBB);
        this.expiredBB = (JSON.parse(this.expiredBB));
        this.expiredBB = this.expiredBB.tasks;
        console.log("current package iS: ",this.expiredBB);
      });

    } else if(pkg == 'monthly2') {
      this.billBoardServices.fetchBillboardQuery('SELECT * FROM `billboard` WHERE date < CURDATE()-55').subscribe(res=>{
        console.log("user is : ",res);
        this.expiredBB = JSON.stringify(res);
        this.expiredBB = JSON.parse(this.expiredBB);
        this.expiredBB = (JSON.parse(this.expiredBB));
        this.expiredBB = this.expiredBB.tasks;
        console.log("current package iS: ",this.expiredBB);
      });
    } else if(pkg == 'yearly1') {
      this.billBoardServices.fetchBillboardQuery('SELECT * FROM `billboard` WHERE date < CURDATE()- 360').subscribe(res=>{
        console.log("user is : ",res);
        this.expiredBB = JSON.stringify(res);
        this.expiredBB = JSON.parse(this.expiredBB);
        this.expiredBB = (JSON.parse(this.expiredBB));
        this.expiredBB = this.expiredBB.tasks;
        console.log("current package iS: ",this.expiredBB);
      });
    } else if(pkg == 'yearly2') {
      this.billBoardServices.fetchBillboardQuery('SELECT * FROM `billboard` WHERE date < CURDATE()- 715').subscribe(res=>{
        console.log("user is : ",res);
        this.expiredBB = JSON.stringify(res);
        this.expiredBB = JSON.parse(this.expiredBB);
        this.expiredBB = (JSON.parse(this.expiredBB));
        this.expiredBB = this.expiredBB.tasks;
        console.log("current package iS: ",this.expiredBB);
      });


    }
  }



  ngOnInit() {

   
    this.arrFeaturedItems=(this.getCountArrValue(this.featureItems.length));
    this.arrFeaturedItemsActive = this.arrFeaturedItems.slice(0,1);
    console.log(this.arrFeaturedItemsActive);
    this.arrFeaturedItems= this.arrFeaturedItems.slice(1,this.arrFeaturedItems.length);
  }



  goToDetail(id)
  {
    console.log(id);
    
    this.router.navigate(['/detail/'+id]);
  }




  getCountArrValue(dataLen)
  {
    var num = 0;
    var arrItemsIndex = [];
    console.log(dataLen);
    console.log(dataLen / this.ITEM_COUNT);
    for (var i = 0; i < Math.floor(dataLen / this.ITEM_COUNT); i++) {
      var tempArr = [];
      tempArr.push(num);
      num = num + 1;
      tempArr.push(num);
      num = num + 1;
      tempArr.push(num);
      num = num + 1;
      arrItemsIndex.push(tempArr);

    }

    if (Math.floor(dataLen % this.ITEM_COUNT)) {
      var tempArrRem = [];
      for (var i = 0; i < Math.floor(dataLen % this.ITEM_COUNT); i++) {
        tempArrRem.push(num);
        num = num + 1;
      }
      arrItemsIndex.push(tempArrRem);
    }
    return arrItemsIndex;
  }

}
