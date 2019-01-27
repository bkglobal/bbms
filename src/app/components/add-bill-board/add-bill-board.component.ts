import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BillboardService } from '../../services/billboard/billboard.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-add-bill-board',
  templateUrl: './add-bill-board.component.html',
  styleUrls: ['./add-bill-board.component.css']
})
export class AddBillBoardComponent implements OnInit {

  title: any;
  description: any;
  width: any;
  height: any;
  price: any;
  picture: any;
  selectedPicture: any;
  billBoard: any;
  category:any;
  imageUrl:any = "assets/bbimg.jpg";
  address: any;
  uploadedImage: any;
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private router: Router, private http: HttpClient, private authService: AuthService, private billBoardService: BillboardService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', response);
         const res = JSON.parse(response);
         this.uploadedImage = res.result;
     };
  }


  async onBBSubmit() {
    console.log(this.title, this.description, this.height, this.width, this.price, this.picture);
    var id = this.authService.getUserData().userid;
    // console.log(this.imageUrl);
    console.log(this.uploadedImage);
    this.billBoard = {
      'ownerId': id,
      'status': '1',
      'title': this.title,
      'description': this.description,
      'width': this.width,
      'height': this.height,
      'price': this.price,
      'picture': this.uploadedImage,
      'category': this.category,
      'address' : this.address
    }
    this.billBoardService.store(this.billBoard).subscribe((res) => {
      console.log("Result=> ", res);
    });
    window.location.reload();
    this.router.navigate(['/my-bill-board']);

  }

  onSelected(event: FileList) {
    this.uploader.uploadAll();
    console.log(event);
    this.selectedPicture = event.item(0);
    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.imageUrl = event.target.result;
      console.log(typeof this.imageUrl);
    };
    reader.readAsDataURL(this.selectedPicture);
    // let elem = event.target;
    // console.log("Running function :" + elem.files.length)
    // if (elem.files.length > 0) {
    //   let data = new FormData();
    //   data.append('file', elem.files[0]);
    //   console.log(elem);
    //   console.log(typeof this.picture);
    //   // this.authService.imageUpload(formData).subscribe(data => {
      //   if (data.success) {
      //     this.imageName = data.imageName;
      //     (<HTMLInputElement>document.getElementById("addNews")).disabled = false;

      //   }

      // })

    }

  }

  // onPictureSelected(event) {
  //   if(event.target.files.length > 0)
  //   {
  //     this.selectedPicture = event.target.files[0];
  //     console.log(this.selectedPicture);
  //     let formData = new FormData();
  //     formData.append('file',this.selectedPicture);

  //     console.log(this.selectedPicture);
  //     let headers = new HttpHeaders();
  //     headers.append('Content-Type', 'application/json');
  //     headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/app.php');

  //     this.http.post("http://localhost/BBMS/apps/BillBoard/UploadImage.php",{'image': this.selectedPicture}).subscribe((data)=>{
  //       console.log("Got data",data);
  //     },(error)=>{
  //       console.log(error);
  //     });  
  //   }
  // }


