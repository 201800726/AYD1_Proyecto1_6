import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ReportesService } from 'src/app/services/reportes.service';
import { DatePipe } from '@angular/common';
import { FileService } from 'src/app/services/file.service';
import { environment } from 'src/environments/environment'


@Component({
  selector: 'app-mis-reportes',
  templateUrl: './mis-reportes.component.html',
  styles: [],
  providers: [DatePipe]

})
export class MisReportesComponent implements OnInit {
  Reportes: Array<any>;
  public usuario: Usuario;

  constructor(
    private _datepipe: DatePipe,
    private _reportService: ReportesService,
    private _fileService: FileService
  ) {
    this.Reportes = [];
    this.usuario = new Usuario();

  }

  async ngOnInit(): Promise<void> {
    await this.getMyReports();
  }

  async getMyReports(): Promise<void> {
    this.getUser();
    try {
      const data = await this._reportService.getReportsEmployee(this.usuario.usuarioID);
      if (data['code'] === 200) {

        for (let reporte of data['data']) {
          await this.getImage(reporte);

          this.Reportes.push({
            No: reporte['No'],
            Fecha: this._datepipe.transform(new Date(reporte['fechaProblema']), 'yyyy-MM-dd'),
            Estado: reporte['Estado'],
            Categoria: reporte['Categoria'],
            Image: reporte['Image']
          });

        }
      }
    } catch (err) {
      console.log("Upss" + err);
    }
  }

  private getUser(): void {
    const usuario: string | null = localStorage.getItem('user');
    if (usuario !== null) this.usuario = <Usuario>JSON.parse(usuario);
  }


  public async getImage(reporte: any) {
    try {
      const data = await this._fileService.get(reporte["No"]);
      if (data['code'] === 200) {
        let url = undefined;
        const images = <Array<any>>data['data'];
        if (images.length > 0) {
          url = `${environment.url}/uploads/${images[0]['ruta']}`
        }
        reporte["Image"] = url;
        console.log(this.Reportes);
      }
    } catch (err) {
      console.log("Upss" + err);
    }
  }
}
