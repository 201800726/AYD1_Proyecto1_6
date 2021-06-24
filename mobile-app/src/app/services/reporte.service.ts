import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  

  public url: string;

  
  constructor(private httpClient: HttpClient) {
    // obtaining previously defined enviroment variable
    this.url = `${environment.url}/reportApp`
  }

  public async getZonas(): Promise<any> {
    return await this.httpClient.get(`${this.url}/zonas`).toPromise();
  }

  public async getCategorias(): Promise<any> {
    return await this.httpClient.get(`${this.url}/categorias`).toPromise();
  }

  public async postReport(usuario: any): Promise<any> {
    const json = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await this.httpClient.post(`${this.url}/reporte`, json, { headers })
      .toPromise();
  }

  public async uploadPhoto(idReporte: any, photo: File): Promise<any> {
    const formData = new FormData();
    formData.append('idReporte', idReporte);
    formData.append('name', photo.name);
    formData.append('image', photo);

    return await this.httpClient.post(`${environment.url}/file/photo`, formData).toPromise();
  }

  public async get(id: number): Promise<any> {
    return await this.httpClient.get(`${environment.url}/file/${id}`)
      .toPromise();
  }


}
