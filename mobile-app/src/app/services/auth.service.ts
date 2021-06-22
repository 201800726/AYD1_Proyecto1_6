import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public url: string;

  private currentUserSubject: BehaviorSubject<Usuario>;
  
  constructor(private httpClient: HttpClient) {
    // obtaining previously defined enviroment variable
    this.url = `${environment.url}/user`
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('user') || '{}'));
  }

  public getUsuarioEnSesion(): Usuario {
    return this.currentUserSubject.value
  }

  public setUsuarioEnSesion(user: Usuario) {
    localStorage.setItem('user', JSON.stringify(user))
    this.currentUserSubject.next(user);
  }

  public endSession() {
    // remove user from local storage and set current user to null
    //localStorage.clear();
    localStorage.removeItem('user');
    this.currentUserSubject.next(new Usuario());
  }

  public isSessionActive() {
    return this.getUsuarioEnSesion().usuarioID !== undefined && this.getUsuarioEnSesion().usuarioID !== 0
  }

  /**
   * Verifica si las creedenciales (usuario y contraseña) brindadas a través del objeto usuario son válidas al hacer una solicitud HTTP al servidor.
   * 
   * @param usuario contiene los parametros necesarios (usuario y contraseña) para autenticarse.
   * @returns la respuesta de la petición HTTP convertida en promesa
   */
  public async authenticate(usuario: Usuario): Promise<any> {
    const json = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await this.httpClient.post(`${this.url}/login`, json, { headers })
      .toPromise();
  }

  public async signUp(usuario: Usuario): Promise<any> {
    const json = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return await this.httpClient.post(`${this.url}/registro`, json, { headers })
      .toPromise();
  }
}

