import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Nurse } from '../models/Nurse';

@Injectable({
  providedIn: 'root'
})
export class NursesService {

  constructor(private readonly _httpClient: HttpClient) { }

  getAllNurses() {
    return this._httpClient.get<Nurse[]>(`${environment.url}/GetAllEnfermero`);
  }

}
