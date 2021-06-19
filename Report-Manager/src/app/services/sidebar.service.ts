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
          { title: 'Chat', url: 'employee/chat' },
          { title: 'Mis Reportes', url: 'employee/my-reports' },
        ]
      },
      {
        title: 'Admin',
        icon: 'mdi mdi-account',
        submenu: [
          { title: 'Reportes', url: 'admin/all-reports' },
        ]
      },
    ];
  }
}
