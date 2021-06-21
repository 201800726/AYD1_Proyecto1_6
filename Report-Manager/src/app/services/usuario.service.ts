import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = `${environment.url}/user`;
  }

  public async getRol(usuario: Usuario): Promise<any> {
    return await this._httpClient.get(`${this.url}/rol/${usuario.usuarioID}`)
      .toPromise();
  }

  public async authenticate(usuario: Usuario): Promise<any> {
    const json = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await this._httpClient.post(`${this.url}/login`, json, { headers })
      .toPromise();
  }
}
