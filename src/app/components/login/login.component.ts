import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router,ActivatedRoute} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;

  constructor(private authService:AuthService,
    private router: Router,
    private route:ActivatedRoute,
    private flashMessage: FlashMessagesService
    ) { 
      if(this.authService.isLoggedIn())
      {
        if(this.authService.getUserData().username == "admin")
        {
          this.router.navigate(['dashboard']);
        }
        else{
          this.router.navigate(['/']);
        }
      }

      this.route.params.subscribe((res)=>{
        if(res.data == 0)
        {
          this.flashMessage.show("Message is send to your email. Kindly verify your account.",{ cssClass: 'alert-success', timeout: 5000 });
        }
      })
    }

  ngOnInit() {
    this.initApp();

  }

  initApp(){
  }

  onLogin()
  {
    console.log(this.username, this.password);
    
      const user= {
        username:this.username,
        password:this.password
      };
      this.authService.login(user).subscribe((res)=>{
        console.log(res);
            if(res['success'] == 'true')
                  {
                    const data = JSON.parse(res['data']);
                    console.log(data.tasks[0]);
                      const authenticatedUser = { 'package':data.tasks[0].package, 'userid':data.tasks[0].id,'username' : data.tasks[0].username, 'email': data.tasks[0].email, 'role':data.tasks[0].userrole};
                      console.log("store user data => ",res['token'] , authenticatedUser);
                      this.authService.storeUserData(res['token'],authenticatedUser);
                      if(this.username == "admin" && this.password == "admin")
                      {

                        this.flashMessage.show('Login Successfully', { cssClass: 'alert-danger', timeout: 1000 });
                        window.location.reload();

                        this.router.navigate(['dashboard']);
                      }
                      else {
                        window.location.reload();
                        this.flashMessage.show('Login Successfully', { cssClass: 'alert-success', timeout: 1000 });
                        this.router.navigate(['/']);
                      }
                  }
                  else{
                    this.flashMessage.show('Username or password is incorrect', { cssClass: 'alert-danger top', timeout: 1000 });
                    this.username = "";
                    this.password = "";
                    // console.log("do this");
                    // this.router.navigate(['/login']);
                  }
      //   if(res== 1)
      //   {
      //     console.log("yes");
      //   }
      //   else
      //   {
      //     console.log("no");
      //   }
      });

  }



//   onLoginSubmit(){
//     const user = {
//        username: this.username,
//        password: this.password
//     }
//     this.authService.authenticateUser(user).subscribe(data => {
//        if(data.success) {
//         console.log(data);
//         const userObj = {
//            username: data.username,
//            email: data.email,
//            name: data.name
//         }
//         this.authService.storeUserData(data.token,userObj);
//         this.flashMessage.show('You have succefully logged in', {cssClass:"alert-success", timeout: 1000}); 
//         this.router.navigate(['/']);
//      } else {
//         this.flashMessage.show(data.msg, {cssClass:"alert-danger", timeout: 3000}); 
//         this.router.navigate(['/login']);     
//        }
//     });
//  }

}
