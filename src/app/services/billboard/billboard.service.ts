import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {

  constructor(private http: HttpClient) { }



  store(data) {

    // SHOULD BE $ownerId, $title, $description, $price, $status, $width, $height, $image
    console.log("store");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBAdd.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BBAdd.php', data, { headers: headers })
      .map((res) => res);

    // RETURN *
  }

  fetch(){
    console.log("fetch");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BBFetchData.php', {}, { headers: headers })
      .map((res) => res);
    // RETURN *
  }

  fetchById(userid){
    console.log("fetch");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log("user id", {id:userid});
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BBFetchData.php', {id:userid}, { headers: headers })
      .map((res) => res);
    // RETURN *
  }

  fetchBBById(userid){
    console.log("fetch");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log("user id", {id:userid});
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BBFetchDataBB.php', {id:userid}, { headers: headers })
      .map((res) => res);
    // RETURN *
  }



  update(data){
    console.log("update");
    // SHOULD BE $id, $ownerId, $title, $description, $price, $status, $width, $height, $image
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBUpdate.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BBUpdate.php', data, { headers: headers })
      .map((res) => res);

    // RETURN $id, $ownerId, $title, $description, $price, $status, $width, $height, $image
  }

  delete(data){
    console.log("delete");
    // SHOULD BE ONLY id
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBDelete.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BBDelete.php', data, { headers: headers })
      .map((res) => res);
  }


  rateBillboard(value, id, currentRating) {
    console.log(currentRating);
    if(!(currentRating == null)) {
      value = (parseInt(value)+parseInt(currentRating))/2;
      console.log('previous is : ',currentRating,' value is : ', value);
    }


    // console.log("delete");
    // SHOULD BE ONLY id
    let data= {
      query :  `update billboard set rating = ${value} where id = ${id}`
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBDelete.php');
    // console.log(data);
    return this.http.post('http://localhost/BBMS/apps/BillBoard/BB_CUD.php', data, { headers: headers })
      .map((res) => res);
  }


  fetchBillboardConditional(price, width, height) {
    // console.log(currentRating);
   

   // console.log("delete");
   // SHOULD BE ONLY id
   let data= {
     query :  `select * from billboard where height = ${height} or width = ${width} or price = ${price}`
   }
   console.log('data given ', data);
   let headers = new HttpHeaders();
   headers.append('Content-Type', 'application/json');
   headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBDelete.php');
   // console.log(data);
   return this.http.post('http://localhost/BBMS/apps/BillBoard/BB_FETCH.php', data, { headers: headers })
     .map((res) => res);
 }

 

 fetchBillboardQuery(query) {
  // console.log(currentRating);
 

 // console.log("delete");
 // SHOULD BE ONLY id
 let data= {
   query :  query
 }
 console.log('data given ', data);
 let headers = new HttpHeaders();
 headers.append('Content-Type', 'application/json');
 headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBDelete.php');
 // console.log(data);
 return this.http.post('http://localhost/BBMS/apps/BillBoard/BB_FETCH.php', data, { headers: headers })
   .map((res) => res);
}



}
