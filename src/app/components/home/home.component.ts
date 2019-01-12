import { Component, OnInit } from '@angular/core';
import {  BillboardService } from  '../../services/billboard/billboard.service';
import { Router } from '@angular/router';

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

  constructor( private router: Router, private billBoardServices : BillboardService) {
    // window.location.reload();
    this.billBoardServices.fetch().subscribe((res)=>{
    this.allBillBoards = JSON.stringify(res);
      this.allBillBoards = JSON.parse(this.allBillBoards);
      this.allBillBoards = (JSON.parse(this.allBillBoards));
      this.allBillBoards = this.allBillBoards.tasks;
      console.log(this.allBillBoards.tasks);

    });

    
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
