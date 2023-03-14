import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Specialty } from '../models/Specialty';

@Injectable({
  providedIn: 'root'
})
export class SpecialtiesService {

  constructor(private readonly _httpClient: HttpClient) { }


  getAllSpecialties() {
    return this._httpClient.get<Specialty[]>(`${environment.url}/GetAllEspecialidad`);
  }

  updateSpeality(updateSpeality: Specialty) {
    return this._httpClient.post(`${environment.url}/PostEspecialidad`, updateSpeality);
  }

  createSpeality(createSpeality: Specialty){
    return this._httpClient.post(`${environment.url}/PostEspecialidad`, createSpeality);
  }

  deleteSpeciality(objIdSpeciality: any){
    return this._httpClient.post(`${environment.url}/DeleteEspecialidad`, objIdSpeciality);
  }
}
