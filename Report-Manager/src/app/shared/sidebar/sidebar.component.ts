import { Component, OnInit } from '@angular/core';
import { TipoRol } from 'src/app/models/rol.model';

import { Usuario } from 'src/app/models/usuario.model';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['']
})
export class SidebarComponent implements OnInit {
  public usuario: Usuario;
  public menuItem: Array<any>;

  constructor(private _sidebarService: SidebarService) {
    this.usuario = new Usuario();
    this.menuItem = [];
  }

  ngOnInit(): void {
    this.getUser();
    this.getMenu();
  }

  public logOut(): void { localStorage.clear(); }

  private getUser(): void {
    const usuario: string | null = localStorage.getItem('user');

    if (usuario !== null) this.usuario = <Usuario>JSON.parse(usuario);
  }

  private getMenu(): void {
    this.menuItem = this._sidebarService.menu;

    const menus: any = {
      'administrador': () => this._sidebarService.menuAdministrador(),
      'empleado': () => this._sidebarService.menuEmpleados(),
    }

    // menus.administrador();

    this.usuario.roles.forEach(rol => {
      menus[rol]();
    });
  }
}
