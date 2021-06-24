import { Injectable } from '@angular/core';
import { TipoRol } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _menu: Array<any>;

  constructor() {
    this._menu = Array<any>();
  }

  public get menu(): Array<any> {
    this._menu = [
      {
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        submenu: [
          { title: 'Home', url: '/' }
        ]
      }
    ];
    return this._menu;
  }

  public menuEmpleados(): void {
    this._menu[0]['submenu'].push({ title: 'Chat', url: 'employee/chat' })
    this._menu[0]['submenu'].push({ title: 'Mis Reportes', url: 'employee/my-reports' })
  }

  public menuAdministrador(): void {
    this._menu.push(
      {
        title: 'Admin',
        icon: 'mdi mdi-account',
        rol: TipoRol.administrador,
        submenu: [
          { title: 'Reportes', url: 'admin/all-reports' },
          { title: 'Registro Empleados', url: 'admin/employee-registration' },
        ]
      },
    );
  }
}
