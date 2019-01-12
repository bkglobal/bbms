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



}
