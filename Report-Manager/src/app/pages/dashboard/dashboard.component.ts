import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';
import { TipoRol } from 'src/app/models/rol.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public usuario: Usuario;
  public admin: Boolean;

  public tituloGrafica: string;
  public labelsGrafica: Array<string>;
  public dataGrafica: Array<any>;

  public dataTable: any;
  public labelsTable: Array<string>;

  constructor() {
    this.tituloGrafica = '';
    this.labelsGrafica = ['Finalizados', 'En proceso', 'Pendientes'];
    this.dataGrafica = [];

    this.labelsTable = ['#', 'Fecha', 'Categoria', 'Estado'];
    this.dataTable = [];

    this.usuario = new Usuario();
    this.admin = false;
  }

  ngOnInit(): void {
    this.getUser();

    if (this.admin) {
      this.adminUser();
    } else {
      this.empleadoUser();
    }

    // this.labelsTable = Object.keys(this.dataTable[0]);
  }

  private getUser(): void {
    const usuario: string | null = localStorage.getItem('user');
    if (usuario !== null) this.usuario = <Usuario>JSON.parse(usuario);

    this.admin = this.usuario.roles.includes(TipoRol.administrador);
  }

  private adminUser(): void {
    // TODO OBTENER lOS ULTIMOS REPORTES REALIZADOS
    // TODO OBTENER ESTADISTICAS DE REPORTES
  }

  private empleadoUser(): void {
    // TODO OBTENER lOS ULTIMOS REPORTES TOMADOS
    // TODO OBTENER ESTADISTICAS DE LOS REPORTES DEL EMPLEADO
  }
}
