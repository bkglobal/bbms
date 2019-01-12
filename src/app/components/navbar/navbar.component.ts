import { Component, OnInit, EventEmitter} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RequestsService } from '../../services/requests/requests.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: any;
  username: any;
  role: any;
  ownerPen: any;
  countNo: any;
  requests: any;
  evt: any;
  constructor(private authService: AuthService,private router: Router, private request: RequestsService) {

    const user = JSON.parse(localStorage.getItem('user'));
    if(user)
    {
      this.username = user.username;
      this.role = user.role;
      console.log(this.role);
      if (this.role) {
        if (this.role == 2) {
          this.ownerPen = true;
        }
        else {
          this.ownerPen = false;
        }
      }
      else {
        this.ownerPen = false;
      }
  
    }
    if (this.authService.getUserData()) {
      console.log("user is getting");
      const data = {
        'user_id': this.authService.getUserData().userid
      }
      console.log("data", data);
      this.request.readByAddOwner(data).subscribe((res) => {
        this.requests = JSON.stringify(res);
        console.log(res);
        this.requests = JSON.parse(this.requests);
        this.requests = (JSON.parse(this.requests));
        this.requests = this.requests.tasks;
        console.log('counts are : ', this.countNo);
        this.countNo = this.requests.length;
      })
      
    }
  }

  ngOnInit() {
    
    this.items = [{ title: 'logout' }];

  }


  onLogoutClick() {
    this.authService.logout();
    // this.flashMessage.show('You have succefully logged out', {cssClass:"alert-success", timeout: 1000});   
    this.router.navigate(['/']);
    return false;
  }

  
  isLoggedIn() {
    // console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }


  isAddAgent() {
    if (this.authService.getUserData()) {
      if (this.authService.getUserData().role == 1) {
        return true;
      }
      else {
        return false;
      }
    }
    return false;
  }


}
