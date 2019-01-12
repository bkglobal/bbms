import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.fetchUser().subscribe((res)=>{
      console.log(res);
      this.user = JSON.stringify(res);
      this.user = JSON.parse(this.user);
      this.user = (JSON.parse(this.user));
      this.user = this.user.tasks;
      console.log(this.user);
    });

  }

  deleteUser(id)
  {
    const data = {id : id};
    this.userService.deleteUser(data).subscribe(()=>{
      this.fetchUser();
    })
  }

  blockUser(id) {
    const data ={id : id, block : 1};
    this.userService.blockUser(data).subscribe(()=>{
      console.log("user blocked");
      this.fetchUser();
    });
  }


  unblockUser(id) {
    const data ={id : id, block : 0};
    this.userService.blockUser(data).subscribe(()=>{
      console.log("user blocked");
      this.fetchUser();
    });
  }

}
