import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


import { Usuario } from 'src/app/models/usuario.model';
import { TipoRol } from 'src/app/models/rol.model';
import { Estadistico } from 'src/app/models/estadisticos.model';

import { ReportesService } from 'src/app/services/reportes.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  public usuario: Usuario;
  public admin: Boolean;
  public estadistico: Estadistico;


  public tituloGrafica: string;
  public labelsGrafica: Array<string>;
  public dataGrafica: Array<any>;

  public dataTable: any;
  public labelsTable: Array<string>;
  public dataSource: MatTableDataSource<any>;

  constructor(
    private _datepipe: DatePipe,
    private _reportService: ReportesService

  ) {
    this.tituloGrafica = '';
    this.labelsGrafica = ['Finalizados', 'En proceso', 'Pendientes'];
    this.dataGrafica = [];

    this.labelsTable = ['No','Fecha','Estado','Categoria'];
    this.dataTable = [];
    this.dataSource = new MatTableDataSource<any>();

    this.usuario = new Usuario();
    this.admin = false;
    this.estadistico = new Estadistico();

  }

  async ngOnInit(): Promise<void> {
    this.getUser();

    if (this.admin) {
      await this.adminUser();
    } else {
      await this.empleadoUser();
    }

  }

  private getUser(): void {
    const usuario: string | null = localStorage.getItem('user');
    if (usuario !== null) this.usuario = <Usuario>JSON.parse(usuario);

    this.admin = this.usuario.roles.includes(TipoRol.administrador);
  }

   private async adminUser(): Promise<void> {
    await this.getLastReports();
    await this.getGeneralStatistics();

  }

  private async empleadoUser(): Promise<void> {
    // TODO OBTENER lOS ULTIMOS REPORTES TOMADOS
    await this.getEmployeeRerports();
    await this.getStatisticsEmployee();
  }

  async getGeneralStatistics(): Promise<void> {
    try {
      const data = await this._reportService.getGeneralStatistics()
      if (data['code'] === 200) {
        this.estadistico = <Estadistico> data['data'];
        this.dataGrafica = [this.estadistico.Finalizados,this.estadistico.Proceso,this.estadistico.Pendientes];
      }

    } catch (err) {
      console.log("Upss"+err);
    }
  }

  async getLastReports(): Promise<void> {
    try {
      const data = await this._reportService.getLastReports()
      if (data['code'] === 200) {
       data['data'].forEach((element:any) => {
          this.dataTable.push({
            No:element['No'],
            Fecha:this._datepipe.transform(new Date(element['Fecha']),'yyyy-MM-dd'),
            Estado:this.getEstado(element['Estado']),
            Categoria:element['Categoria']
          });
        });
        this.dataSource.data = this.dataTable;
      }

    } catch (err) {
      console.log("Upss"+err);
    }
  }

  private getEstado(numero:number):string{
    const estados: any = {
      0:'Pendiente',
      1:'En proceso',
      2:'Finalizado'
    }
    return estados[numero];
  }

  async getStatisticsEmployee(): Promise<void>{
    try {
      const data = await this._reportService.getStatisticsEmployee(this.usuario.usuarioID)
      if (data['code'] === 200) {
        this.estadistico = <Estadistico> data['data'];
        this.dataGrafica = [this.estadistico.Finalizados,this.estadistico.Proceso,this.estadistico.Pendientes];
      }

    } catch (err) {
      console.log("Upss"+err);
    }
  }

  async getEmployeeRerports(){
    try {
      const data = await this._reportService.getReportsEmployee(this.usuario.usuarioID)
      if (data['code'] === 200) {
       data['data'].forEach((element:any) => {
          this.dataTable.push({
            No:element['No'],
            Fecha:this._datepipe.transform(new Date(element['Fecha']),'yyyy-MM-dd'),
            Estado:this.getEstado(element['Estado']),
            Categoria:element['Categoria']
          });
        });
        this.dataSource.data = this.dataTable;
      }

    } catch (err) {
      console.log("Upss"+err);
    }
  }


}
