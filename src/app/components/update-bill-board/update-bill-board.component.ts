import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BillboardService } from '../../services/billboard/billboard.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-bill-board',
  templateUrl: './update-bill-board.component.html',
  styleUrls: ['./update-bill-board.component.css']
})
export class UpdateBillBoardComponent implements OnInit {
  id: any;
  title: any;
  description: any;
  width: any;
  height: any;
  price: any;
  picture: any;
  selectedPicture: any;
  billBoard: any;
  constructor(private route:ActivatedRoute, private router:Router,private http : HttpClient,private authService :AuthService, private billBoardService: BillboardService) { 
      
      this.route.params.subscribe(res=>{
        console.log(res.data);
        this.billBoard = JSON.parse(res.data);
        this.id = this.billBoard.id;
        this.title= this.billBoard.title;
        this.description = this.billBoard.description;
        this.width = this.billBoard.width;
        this.height = this.billBoard.height;
        this.price = this.billBoard.price;
        this.picture = this.billBoard.picture;
      });
  }

  
  ngOnInit() {
  }


  onBBSubmit() {
    console.log(this.title, this.description, this.height, this.width, this.price, this.picture);
    this.picture = null;
    var id = this.authService.getUserData().userid;
    this.billBoard = {
      'id':this.id,
      'ownerId': id,
      'status': '1',
      'title': this.title,
      'description' : this.description,
      'width':this.width,
      'height': this.height,
      'price': this.price,
      'picture':this.picture
    }
    this.billBoardService.update(this.billBoard).subscribe((res)=>{
      console.log("Result=> ", res);
    });

    this.router.navigate(['/my-bill-board']);

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
}
