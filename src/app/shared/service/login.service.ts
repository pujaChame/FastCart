import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  adduser(user:any){
    localStorage.setItem("UserInfo",JSON.stringify(user));
  }

  getuser(){
    let user = localStorage.getItem("UserInfo");
    if(user){
      const userinfo = JSON.parse(user);
      return userinfo;
    }
  }
}
