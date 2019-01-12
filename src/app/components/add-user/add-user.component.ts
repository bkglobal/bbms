import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidationService } from '../../services/validation.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  character: string;
  
  constructor(  private flashMessage:FlashMessagesService, private authService:AuthService , private validationService: ValidationService) { }

  ngOnInit() {
  }

onRegister( ) {
  const user = {
    id:"2",
    name: this.name,
    email: this.email,
    password: this.password,
    character: this.character,
    isVerified: 0
  };
  console.log(user);


  if (!this.validationService.validateEmail(this.email)) {
    alert("Please Enter valid email address");
    this.flashMessage.show('Please Enter valid Email Address', { cssClass: 'alert-danger', timeout: 1000 });
    return false;
  }

  this.authService.registerUser(user).subscribe(data => {
    if (data) {
      // this.flashMessage.show('Logged in. Please wait...', { cssClass: 'alert-Success', timeout: 1000 });

      // alert("User registerd successfully", data);
      this.flashMessage.show('Registered Successfully.', { cssClass: 'alert-danger', timeout: 1000 });
      this.name = null;
      this.password = null;
      this.email = null;
    }
    else {
      alert("Error subscription" + data);
      this.flashMessage.show('Error Subscription', { cssClass: 'alert-danger', timeout: 1000 });
    }
  })

}


}
