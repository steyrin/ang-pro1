import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public authRole: string = "Guest";
  public home: string = "Home";
  constructor() { }
  LoginName:string;
  userCheck(login: string, password: string):void
  {
    this.LoginName = login;
    switch (login + password) {

      case "admin@mail.ruadmin":
        this.authRole = 'Admin';
        break;
      default :
          this.authRole = 'User';
        break;

    }
  }

}
