import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  public url:string;

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
    return await this._httpClient.get(`${this.url}/`)
      .toPromise();
  }

  public async getReportsEmployee(id:number): Promise<any> {
    return await this._httpClient.get(`${this.url}/employee/${id}`)
      .toPromise();
  }

}
