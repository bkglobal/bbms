// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   authToken:any;
//   user:any;
//   constructor(private http:Http) { }

//   registerUser(user)
//   {
//     let header = new Headers();
//     header.append('Content-Type','application/json');
//     return this.http.post('http://localhost/BBMS/app.php',user, {headers:header}).map(
//       res =>res.json() 
//     );
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { JsonPipe } from '@angular/common';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/app.php');
    return this.http.post('http://localhost/BBMS/apps/User/UserAdd.php', user, { headers: headers })
      .map(res => res);
  }



  login(data) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/authenticateUser.php');
    console.log(data);
    return this.http.post('http://localhost/BBMS/authenticateUser.php', data, { headers: headers })
      .map((res) => res);
  }



  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  isLoggedIn() {
    return tokenNotExpired('id_token');
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getUserData()
  {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}

