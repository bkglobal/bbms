import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  addRequest(data)
  {
    // SHOULD BE $ownerId, $title, $description, $price, $status, $width, $height, $image
    console.log("store");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBAdd.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/apps/Requests/addRequest.php', data, { headers: headers })
      .map((res) => res);
  }

  readByAddAgent(data)
  {
    // SHOULD BE $ownerId, $title, $description, $price, $status, $width, $height, $image
    console.log("store");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBAdd.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/apps/Requests/readRequestByAddAgent.php', data, { headers: headers })
      .map((res) => res);
  }

  readByAddOwner(data)
  {
    // SHOULD BE $ownerId, $title, $description, $price, $status, $width, $height, $image
    console.log("store");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/Requests/readRequestByOwner.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/apps/Requests/readRequestByOwner.php', data, { headers: headers })
      .map((res) => res);
  }


  approveRequest(data)
  {
    console.log("store");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBAdd.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/apps/Requests/approveRequest.php', data, { headers: headers })
      .map((res) => res);
  }


  removeRequest(data)
  {
    console.log("store");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBAdd.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/apps/Requests/deleteRequest.php', data, { headers: headers })
      .map((res) => res);
  }

}
