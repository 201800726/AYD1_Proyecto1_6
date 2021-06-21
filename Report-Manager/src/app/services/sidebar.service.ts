import { Injectable } from '@angular/core';
import { TipoRol } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu: Array<any>;

  constructor() {
    this.menu = [
      {
        title: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        submenu: [
          { title: 'Home', url: '/' },
          { title: 'Chat', url: 'employee/chat', rol: TipoRol.empleado },
          { title: 'Mis Reportes', url: 'employee/my-reports', rol: TipoRol.empleado },
        ]
      },
      {
        title: 'Admin',
        icon: 'mdi mdi-account',
        rol: TipoRol.administrador,
        submenu: [
          { title: 'Reportes', url: 'admin/all-reports', rol: TipoRol.administrador },
        ]
      },
    ];
  }
}
