import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estadistico } from 'src/app/models/estadisticos.model';
import { DatePipe } from '@angular/common';


import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-lista-reportes',
  templateUrl: './lista-reportes.component.html',
  styles: [],
  providers: [DatePipe]

})
export class ListaReportesComponent implements OnInit {
  public estadistico: Estadistico;


  public dataTable: any;
  public labels: Array<string>;
  public dataSource: MatTableDataSource<any>;


  constructor(
    private _datepipe: DatePipe,
    private _reportService: ReportesService
  ) {
    this.labels = ['No', 'Fecha', 'Estado', 'Categoria'];
    this.dataTable = [];
    this.dataSource = new MatTableDataSource<any>();

    this.estadistico = new Estadistico();
  }

  async ngOnInit(): Promise<void> {
    await this.getGeneralStatistics();
    await this.getAllRerports();
  }

  async getGeneralStatistics(): Promise<void> {
    try {
      const data = await this._reportService.getGeneralStatistics()
      if (data['code'] === 200) {
        this.estadistico = <Estadistico>data['data'];
      }

    } catch (err) {
      console.log("Upss");
    }
  }

  async getAllRerports() {
    try {
      const data = await this._reportService.getLastReports()
      if (data['code'] === 200) {
        data['data'].forEach((element: any) => {
          console.log(data);
          this.dataTable.push({
            No: element['No'],
            Zona: element['Zona'],
            Categoria: element['Categoria'],
            Descripcion: element['Descripcion'],
            Reportador: element['nombre'] + " " + element['apellido'],
            'Fecha Reporte': this._datepipe.transform(new Date(element['Fecha']), 'yyyy-MM-dd'),
            'Fecha Visualizacion': this._datepipe.transform(new Date(element['fechaProblema']), 'yyyy-MM-dd'),
            Estado: this.getEstado(element['Estado'])
          });
        });
        this.labels = Object.keys(this.dataTable[0]);
        this.dataSource.data = this.dataTable;
        console.log(this.dataSource.data);
      }

    } catch (err) {
      console.log("Upss");
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

}
