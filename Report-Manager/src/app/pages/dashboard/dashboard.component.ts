import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment'

import { Usuario } from 'src/app/models/usuario.model';
import { TipoRol } from 'src/app/models/rol.model';
import { Estadistico } from 'src/app/models/estadisticos.model';

import { ReportesService } from 'src/app/services/reportes.service';
import { MatTableDataSource } from '@angular/material/table';
import { Mensaje } from 'src/app/models/mensaje.model';
import { ChatService } from 'src/app/services/chat.service';
import { FileService } from 'src/app/services/file.service';


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
  public reportes: Array<any>;


  public tituloGrafica: string;
  public labelsGrafica: Array<string>;
  public dataGrafica: Array<any>;

  public dataTable: any;
  public labelsTable: Array<string>;
  public dataSource: MatTableDataSource<any>;

  constructor(
    private _datepipe: DatePipe,
    private _reportService: ReportesService,
    private _chatService: ChatService,
    private _fileService: FileService

  ) {
    this.tituloGrafica = '';
    this.labelsGrafica = ['Finalizados', 'En proceso', 'Pendientes'];
    this.dataGrafica = [];

    this.labelsTable = ['No', 'Fecha', 'Estado', 'Categoria'];
    this.dataTable = [];
    this.dataSource = new MatTableDataSource<any>();

    this.usuario = new Usuario();
    this.admin = false;
    this.estadistico = new Estadistico();
    this.reportes = []

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
    await this.getEmployeeRerports();
    await this.getStatisticsEmployee();
    await this.getUnassignedReports();
  }

  async getGeneralStatistics(): Promise<void> {
    try {
      const data = await this._reportService.getGeneralStatistics()
      if (data['code'] === 200) {
        this.estadistico = <Estadistico>data['data'];
        this.dataGrafica = [this.estadistico.Finalizados, this.estadistico.Proceso, this.estadistico.Pendientes];
      }

    } catch (err) {
      console.log("Upss" + err);
    }
  }

  async getLastReports(): Promise<void> {
    try {
      const data = await this._reportService.getLastReports()
      if (data['code'] === 200) {
        data['data'].forEach((element: any) => {
          this.dataTable.push({
            No: element['No'],
            Fecha: this._datepipe.transform(new Date(element['Fecha']), 'yyyy-MM-dd'),
            Estado: this.getEstado(element['Estado']),
            Categoria: element['Categoria']
          });
        });
        this.dataSource.data = this.dataTable;
      }

    } catch (err) {
      console.log("Upss" + err);
    }
  }

  private getEstado(numero: number): string {
    const estados: any = {
      0: 'Pendiente',
      1: 'En proceso',
      2: 'Finalizado'
    }
    return estados[numero];
  }

  async getStatisticsEmployee(): Promise<void> {
    try {
      const data = await this._reportService.getStatisticsEmployee(this.usuario.usuarioID)
      if (data['code'] === 200) {
        this.estadistico = <Estadistico>data['data'];
        this.dataGrafica = [this.estadistico.Finalizados, this.estadistico.Proceso, this.estadistico.Pendientes];
      }

    } catch (err) {
      console.log("Upss" + err);
    }
  }

  async getEmployeeRerports() {
    try {
      const data = await this._reportService.getReportsEmployee(this.usuario.usuarioID)
      if (data['code'] === 200) {
        data['data'].forEach((element: any) => {
          this.dataTable.push({
            No: element['No'],
            Fecha: this._datepipe.transform(new Date(element['Fecha']), 'yyyy-MM-dd'),
            Estado: this.getEstado(element['Estado']),
            Categoria: element['Categoria'],
          });
        });
        this.dataSource.data = this.dataTable;
      }

    } catch (err) {
      console.log("Upss" + err);
    }
  }

  async getUnassignedReports() {
    try {
      const data = await this._reportService.getUnassignedReports();
      if (data['code'] === 200) {
        this.reportes = data['data'];
        for (let reporte of this.reportes) {
          await this.getImage(reporte);
        }
      }

    } catch (err) {
      console.log("Upss" + err);
    }

  }

  async assignEmployee(noReporte: number) {
    let empleado = {
      empleado: this.usuario.usuarioID
    }
    try {
      await this._reportService.assignEmployee(empleado, noReporte);
    } catch (err) {
      console.log("Upss" + err);
    }
    await this.enviarMensaje(noReporte);
  }

  public async enviarMensaje(noReporte: number) {
    try {
      let mensaje: Mensaje = new Mensaje(noReporte,
        this.usuario.usuarioID,
        "Querido ciudadano muchas gracias por su reporte, ya hemos asignado un encargado.");
      await this._chatService.crearMensaje(mensaje);
    } catch (err) {
      console.log("Upss" + err);
    }
  }

  public async getImage(reporte: any) {
    try {
      const data = await this._fileService.get(reporte["no"]);
      if (data['code'] === 200) {
        let url = undefined;
        const images = <Array<any>>data['data'];
        if (images.length > 0) {
          url = `${environment.url}/uploads/${images[0]['ruta']}`
        }
        reporte["Image"] = url;
      }
    } catch (err) {
      console.log("Upss" + err);
    }
  }


}
