import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private readonly _httpClient: HttpClient) { }

  getAllDoctors() {
    return this._httpClient.get<Doctor[]>(`${environment.url}/GetAllMedico`);
  }

}
