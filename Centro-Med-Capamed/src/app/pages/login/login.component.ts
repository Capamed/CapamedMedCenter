import { Component } from '@angular/core';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  valueIconRight: any;
  public objLogin:Login = {
    username: '',
    password: ''
  };

  constructor() {
  }

  ngOnInit(): void{
  }

}
