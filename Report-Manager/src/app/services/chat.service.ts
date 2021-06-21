import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Usuario } from '../models/usuario.model';
import { Chat } from '../models/chat.model';
import { Mensaje } from '../models/mensaje.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = `${environment.url}/chat`;
  }

  public async getAll(usuario: Usuario): Promise<any> {
    return await this._httpClient.get(`${this.url}/${usuario.usuarioID}`)
      .toPromise();
  }

  public async obtenerMensaje(chat: Chat): Promise<any> {
    return await this._httpClient.get(`${this.url}/${chat.reporteID}/mensaje`)
      .toPromise();
  }

  public async crearMensaje(mensaje: Mensaje): Promise<any> {
    const json = JSON.stringify(mensaje);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await this._httpClient.post(`${this.url}/${mensaje.reporte}/mensaje`,
      json, { headers: headers }).toPromise();
  }
}
