import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  public url: string;
  constructor(private httpClient: HttpClient) {
    // obtaining previously defined enviroment variable
    this.url = `${environment.url}/report`
  }

  /**
   * Recupera los reportes que han sido asociados al usuario por medio de una petición HTTP-GET
   * 
   * @param usuarioID el identificador del Usuario del que se necesita recuperar sus reportes.
   * @returns la respuesta de la petición HTTP GET convertida en promesa
   */
  public async getByCitizenID(usuarioID: number): Promise<any> {
    return await this.httpClient.get(`${this.url}/citizen/${usuarioID}`)
      .toPromise();
  }
}
