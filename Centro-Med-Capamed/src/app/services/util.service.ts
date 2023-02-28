import { Injectable } from '@angular/core';
import { MsgToast } from '../models/MsgToast';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  showToastNotification(message: string, code: number): MsgToast {
    let typeNotification: string = "";
    if (code >= 200 && code < 300) {
      typeNotification = 'success';
    } else if (code === 401 || code >= 500) {
      typeNotification = 'error';
    } else {
      typeNotification = 'warning';
    }
    return new MsgToast(message, code, typeNotification);
  }
}
