import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: "Dashboard",
      link: '/dashboard'
    },
    {
      title: 'User',
      children: [
      //   {
      //   title: 'Add',
      //   link: 'addUser'
      // },
      {
        title: 'View',
        link: 'users'
      }]
    },
    {
      title: 'Bill Boards',
      children: [
      //   {
      //   title: 'Add',
      //   link: 'addBillBoard'
      // },
      {
        title: 'View',
        link: 'billBoard'
      }]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
