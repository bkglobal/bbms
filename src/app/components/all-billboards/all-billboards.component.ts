import { Component, OnInit } from '@angular/core';
import {BillboardService } from '../../services/billboard/billboard.service';
import { AuthService } from '../../services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-all-billboards',
  templateUrl: './all-billboards.component.html',
  styleUrls: ['./all-billboards.component.css']
})
export class AllBillboardsComponent implements OnInit {
  billBoards:any;
  billBoardsTasks: any;
  constructor( private router : Router , private billBoardServices:BillboardService, private authService: AuthService) { }

  ngOnInit() {
    this.billBoardServices.fetch().subscribe((res)=>{
      this.billBoards = JSON.stringify(res);
      this.billBoards = JSON.parse(this.billBoards);
      this.billBoards = (JSON.parse(this.billBoards));
      this.billBoardsTasks = this.billBoards.tasks;
      console.log(this.billBoards.tasks);
    });
  }

  goToEdit(billBoard)
  {
    console.log(billBoard);
    // const data = JSON.parse(billBoard);
    this.router.navigate(['/dashboard/updateBillBoard',{'data':JSON.stringify(billBoard)}]);
    // [routerLink]="['/updateBillBoard',{'data':billBoard}]"
  }


  removeBoard(billBoard)
  {
    const data = {'id':billBoard.id}
    this.billBoardServices.delete(data).subscribe((res)=>{
      this.billBoardsTasks = this.billBoardsTasks.filter((item)=>{
        return item.id != billBoard.id;
      })
    });
  }


}
