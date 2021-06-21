import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.getUser();
  }

  public logOut(): void { localStorage.clear(); }

  private getUser(): void {
    const usuario: string | null = localStorage.getItem('user');

    if (usuario !== null) {
      this.usuario = <Usuario>JSON.parse(usuario);
    }
  }
}
