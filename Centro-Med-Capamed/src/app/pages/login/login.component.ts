import { Component, OnInit } from '@angular/core';
import { UserLoginHttpService } from 'src/app/services/user-login-http.service';
import { MessageService } from 'primeng/api';
import { Login } from 'src/app/models/Login';
import { UtilService } from 'src/app/services/util.service';
import { MsgToast } from 'src/app/models/MsgToast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public valueIconRight: any;
  public objLogin: Login = {
    username: '',
    password: ''
  };
  public showAlertSmUser: boolean = false;
  public showAlertSmPassword: boolean = false;
  public showMsjToast: boolean = false;
  public code: number = 0;
  public message: string = "";
  public objShowNotifi: MsgToast | undefined;

  constructor(private readonly _userLoginHttpServ: UserLoginHttpService,
    private readonly _utilService: UtilService,
    private readonly _router: Router) {
  }

  ngOnInit(): void {
  }

  validateUserLogin(objFormLogin: any) {
    let code: number = 0;
    let message: string = "";
    if (objFormLogin.username === "" || objFormLogin.username === undefined || objFormLogin.username === null) {
      this.showAlertSmUser = true;
    } else {
      this.showAlertSmUser = false;
    }

    if (objFormLogin.password === "" || objFormLogin.password === undefined || objFormLogin.password === null) {
      this.showAlertSmPassword = true;
    } else {
      this.showAlertSmPassword = false;
    }
    let verifyUser = this._userLoginHttpServ.validateUserLogin(this.objLogin);
    if (verifyUser) {
      code = 200;
      message = "La credenciales son las correctas."
      this.objShowNotifi = this._utilService.showToastNotification(message, code);
      this.showMsjToast = true;
      setTimeout(() => {
        this.showMsjToast = false;
        const url = ['/main-menu'];
        this._router.navigate(url);

      }, 1000);
    } else {
      code = 500;
      message = "La credenciales no son las correctas."
      this.objShowNotifi = this._utilService.showToastNotification(message, code);
      this.showMsjToast = true;
      setTimeout(() => {
        this.showMsjToast = false;
      }, 3000);
    }

  }

}
