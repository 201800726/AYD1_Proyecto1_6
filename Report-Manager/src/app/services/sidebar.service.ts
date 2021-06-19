import { Injectable } from '@angular/core';

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
        ],
        rol: 1
      },
      {
        title: 'Admin',
        icon: 'mdi mdi-account',
        submenu: [
          { title: 'Reportes', url: '/' },
        ],
        rol: 1
      },
    ];
  }
}
