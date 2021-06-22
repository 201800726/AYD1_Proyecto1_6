import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { Usuario } from 'src/app/models/usuario.model';
import { Reporte } from 'src/app/models/reporte.model';
import { Mensaje } from 'src/app/models/mensaje.model';
import { ChatService } from 'src/app/services/chat.service';
import { ReportesService } from 'src/app/services/reportes.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public usuario!: Usuario;
  public reporte: Reporte;

  public imagenes!: Array<any>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _reporteService: ReportesService,
    private _chatService: ChatService,
    private _fileService: FileService
  ) {
    this.reporte = new Reporte();
  }

  async ngOnInit(): Promise<void> {
    this._activatedRoute.params.subscribe(
      params => { this.reporte.reporteID = params['reporteID']; }
    );

    this.getUser();
    await this.getReporte();
  }

  private getUser(): void {
    const usuario: string | null = localStorage.getItem('user');

    if (usuario !== null) this.usuario = <Usuario>JSON.parse(usuario);
  }

  private async getReporte(): Promise<void> {
    try {
      const data = await this._reporteService.getReporte(this.reporte);
      if (data['code'] === 200) {
        this.reporte = <Reporte>data['data'];

        if (this.usuario.usuarioID !== this.reporte.empleadoID) {
          throw new Error();
        }

        await this.getImagenes();
      }
    } catch (err) {
      this._router.navigate(['/404']);
    }
  }

  private async getImagenes(): Promise<void> {
    try {
      const data = await this._fileService.get(this.reporte.reporteID);

      if (data['code'] === 200) {
        if ((<Array<any>>data['data']).length > 0) {
          this.imagenes = [];
          data['data'].forEach((element: any) => {
            this.imagenes.push({
              url: `${environment.url}/${element['ruta']}`,
              nombre: element['nombre']
            })
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  public async actualizarEstado(estado: string, contenido: string): Promise<void> {
    try {
      // TODO NOTIFICAR EMPRESAS
      this.reporte.estado = estado;
      await this._reporteService.actualizarReporte(this.reporte);

      contenido = `Tu reporte paso al estado "${contenido}"`;
      const mensaje: Mensaje = new Mensaje(this.reporte.reporteID,
        this.usuario.usuarioID, contenido);
      await this._chatService.crearMensaje(mensaje);

      await this.getReporte();
    } catch (err) {
      console.log(err);
    }
  }
}
