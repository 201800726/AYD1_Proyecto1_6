import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Reporte } from '../models/reporte.model';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = `${environment.url}/report`;
  }

  public async getGeneralStatistics(): Promise<any> {
    return await this._httpClient.get(`${this.url}/statistics/data/`)
      .toPromise();
  }

  public async getStatisticsEmployee(id:number): Promise<any> {
    return await this._httpClient.get(`${this.url}/statistics/data/${id}`)
      .toPromise();
  }

  public async getLastReports(): Promise<any> {
    return await this._httpClient.get(this.url)
      .toPromise();
  }

  public async getReporte(reporte: Reporte): Promise<any> {
    return await this._httpClient.get(`${this.url}/${reporte.reporteID}`)
      .toPromise();
  }

  public async actualizarReporte(reporte: Reporte): Promise<any> {
    const json = JSON.stringify(reporte);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await this._httpClient.put(`${this.url}/${reporte.reporteID}`,
      json, { headers }).toPromise();
  }

  public async getReportsEmployee(id:number): Promise<any> {
    return await this._httpClient.get(`${this.url}/employee/${id}`)
      .toPromise();
  }

  public async getUnassignedReports(): Promise<any> {
    return await this._httpClient.get(`${this.url}/assigned/unassigned/employee/state/`)
      .toPromise();
  }

  public async assignEmployee(empleado: any, reporteID:number): Promise<any> {
    const json = JSON.stringify(empleado);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await this._httpClient.put(`${this.url}/assigned/unassigned/employee/state/${reporteID}`,
      json, { headers }).toPromise();
  }

}
