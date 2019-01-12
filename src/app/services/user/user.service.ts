import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  fetchById(userid)
  {
    console.log("fetch");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/User/UserFetch.php', {id : userid}, { headers: headers })
      .map((res) => res);
    // RETURN *
  }


  fetchUser()
  {
    console.log("fetch");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/User/UserFetch.php', {}, { headers: headers })
      .map((res) => res);
    // RETURN *
  }



  fetchProfileById(userid)
  {
    console.log("fetch");
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/User/UserProfileFetch.php', {id : userid}, { headers: headers })
      .map((res) => res);
    // RETURN *
  }


  updateUser(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/User/UserUpdate.php', data , { headers: headers })
      .map((res) => res);
  }

  updateUserProfile(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/User/UserUpdateProfile.php', data , { headers: headers })
      .map((res) => res);
  }


  userPasswordUpdate(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/User/UserPasswordUpdate.php', data , { headers: headers })
      .map((res) => res);
  }

  deleteUser(data)
  { let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/User/UserDelete.php', data , { headers: headers })
      .map((res) => res);

  }


  blockUser(data) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost/BBMS/apps/BillBoard/BBFetchData.php');
    return this.http.post('http://localhost/BBMS/apps/User/BlockUnblockUser.php', data , { headers: headers })
      .map((res) => res);

  }


}
