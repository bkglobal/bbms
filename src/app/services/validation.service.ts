import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateRegister(user)
  {
    if(user.name == undefined || user.password == undefined || user.confirm_password == undefined || user.email == undefined || user.character == undefined || user.name == "" || user.password == "" || user.confirm_password == "" || user.email == "")
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  validateEmail(email)
  {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
