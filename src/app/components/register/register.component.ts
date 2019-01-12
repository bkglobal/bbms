import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../services/validation.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  character: string;

  constructor(private flashMessage:FlashMessagesService, private validationService: ValidationService, private authService: AuthService,private router:Router) {

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
   }

  ngOnInit() {
    
  }

  onRegister() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirm_password: this.password_confirmation,
      character: this.character
    };

    const user2 = {
      id:"2",
      name: this.name,
      email: this.email,
      password: this.password,
      character: this.character,
      isVerified: 0
    };
    console.log(user);
    if (!this.validationService.validateRegister(user)) {
      // alert("Please fill in all fields");
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 1000 });
      return false;
    }

    if(!(this.password == this.password_confirmation))
    {
      this.flashMessage.show('Password doesnt match', { cssClass: 'alert-danger', timeout: 1000 });
      return false;
    }

    if (!this.validationService.validateEmail(this.email)) {
      alert("Please Enter valid email address");
      this.flashMessage.show('Please Enter valid Email Address', { cssClass: 'alert-danger', timeout: 1000 });
      return false;
    }



    this.router.navigate(['pricing',{data:JSON.stringify(user2)}],{skipLocationChange:true});



  }

}
