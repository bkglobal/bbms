import { Component, OnInit } from '@angular/core';
import { BillboardService } from '../../services/billboard/billboard.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-billboard',
  templateUrl: './my-billboard.component.html',
  styleUrls: ['./my-billboard.component.css']
})
export class MyBillboardComponent implements OnInit {
  billBoards:any;
  constructor(private router:Router, private billBoardServices:BillboardService, private authService: AuthService) { }

  ngOnInit() {
    this.billBoardServices.fetchById(this.authService.getUserData().userid).subscribe((res)=>{
      this.billBoards = JSON.stringify(res);
      this.billBoards = JSON.parse(this.billBoards);
      this.billBoards = (JSON.parse(this.billBoards));
      this.billBoards = this.billBoards.tasks;
      console.log(this.billBoards);
    });
  }


  
  goToEdit(billBoard)
  {
    console.log(billBoard);
    // const data = JSON.parse(billBoard);
    this.router.navigate(['/updateBillBoard',{'data':JSON.stringify(billBoard)}]);
    // [routerLink]="['/updateBillBoard',{'data':billBoard}]"
  }

  removeBoard(billBoard)
  {
    const data = {'id':billBoard.id}
    this.billBoardServices.delete(data).subscribe((res)=>{
      this.billBoards = this.billBoards.filter((item)=>{
        return item.id != billBoard.id;
      })
    });
  }


}
