import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  character: string;
  image: any;
  contact: any;
  address:any;
  isVerified: any;
  constructor() { }

  ngOnInit() {
  }

}
