import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoginHttpService {

  constructor(private readonly _httpClient: HttpClient) { }

  validateUserLogin(objLogin: Login) {
    //Este método que recibe como parametros el usuario y contraseña, sirve para replicar el escenario de validación de un usuario registrado en la base de datos.
    /*
    1. Armamos el body con el nombre de usuario y el password
      const body = {
        "password": objLogin.password,
        "username": objLogin.username
      }
    2. Armamos la ruta a la cual se va efectuar la petición POST
      return this._httpClient.post(`${environment.url}`, body);*/
    //En este caso solo validaremos un usuario y su password por defecto.
    if (objLogin.username === "Administrador" && objLogin.password === "administrador123")
      return true;
    return false;
  }

}
