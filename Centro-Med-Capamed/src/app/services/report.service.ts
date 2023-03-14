import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private readonly _httpClient: HttpClient) { }


  getReport(year: number) {
    return this._httpClient.get<Report[]>(`${environment.url}/GetCitaAnual?anio=${year}`);
  }

}
