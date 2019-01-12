import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  oldPassword: any;
  newPassword: any;
  confirmNewPassword: any;
  passwordMatched: boolean;
  email: any;
  address: any;
  contact: any;
  name: any;
  image: any;
  userId: any;
  userData: any;
  userProfileData: any;
  profileImage: any;
  editMode: boolean = false;
  constructor(private flashMessage: FlashMessagesService, private userService: UserService) {
    this.loadData();




  }

  private loadData() {
    this.userId = localStorage.getItem('user');
    console.log(this.userId);
    this.userId = JSON.parse(this.userId).userid;
    console.log(this.userId);
    this.userService.fetchById(this.userId).subscribe((res) => {
      this.userData = JSON.stringify(res);
      this.userData = JSON.parse(this.userData);
      this.userData = (JSON.parse(this.userData));
      this.userData = this.userData.tasks[0];
      console.log(this.userData);
    });
    this.userService.fetchProfileById(this.userId).subscribe((res) => {
      this.userProfileData = JSON.stringify(res);
      this.userProfileData = JSON.parse(this.userProfileData);
      this.userProfileData = (JSON.parse(this.userProfileData));
      this.userProfileData = this.userProfileData.tasks[0];
      console.log(this.userProfileData);
      if (this.userProfileData.image == null) {
        console.log("profile image is null");
        this.profileImage = "https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg";
      }
      else {
        console.log("not null");
        this.profileImage = this.userProfileData.image;
      }
    });
  }

  ngOnInit() {

  }


  isPasswordMatched() {

    console.log(this.newPassword,this.userData.password, this.confirmNewPassword);
    if (this.oldPassword === this.userData.password) {
      if (this.newPassword === this.confirmNewPassword) {
        this.passwordMatched = true;
      }
      else {
        this.passwordMatched = false;
      }
    }
    else {
      this.passwordMatched = false;
    }
  }


  updatePassword(id) {
    if (this.passwordMatched) {
      const data = {
        'id': id,
        'password': this.newPassword
      };
      this.userService.userPasswordUpdate(data).subscribe((res) => {
        this.flashMessage.show('Password changed successfully.', { cssClass: 'alert-success', timeout: 1000 })
        this.loadData();
      });
    }
    else {
      this.flashMessage.show('Password doesnt match.', { cssClass: 'alert-danger', timeout: 1000 });
      return false;

    }
  }

  goToEditMode() {
    this.editMode = true;
  }

  goToViewMode() {
    this.editMode = false;
    console.log(this.userData);
    console.log(this.userProfileData);
    this.userService.updateUser(this.userData).subscribe((res) => {
      console.log(res);
    });
    this.userService.updateUserProfile(this.userProfileData).subscribe((res) => {
      console.log(res);
    })
  }


  onSelected(event: FileList) {
    console.log(event);
    this.userProfileData.image = event.item(0);
    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.userProfileData.image = event.target.result;
      console.log(typeof this.userProfileData.image);
    };
    reader.readAsDataURL(this.userProfileData.image);
    console.log(this.userProfileData);
    this.userService.updateUserProfile(this.userProfileData).subscribe((res) => {
      console.log(res);
    })
  
  }

  
}
