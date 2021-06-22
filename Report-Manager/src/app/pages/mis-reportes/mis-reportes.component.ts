import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ReportesService } from 'src/app/services/reportes.service';
import { DatePipe } from '@angular/common';


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
    private _reportService: ReportesService
  ) {
    this.Reportes = [];
    this.usuario = new Usuario();

   }

  async ngOnInit(): Promise<void> {
    await this.getMyReports();
  }

  async getMyReports():Promise<void>{
    this.getUser();
    try {
      const data = await this._reportService.getReportsEmployee(this.usuario.usuarioID);
      if (data['code'] === 200) {
        console.log(this.Reportes);
        data['data'].forEach((element: any) => {
          this.Reportes.push({
            No: element['No'],
            Fecha: this._datepipe.transform(new Date(element['fechaProblema']), 'yyyy-MM-dd'),
            Estado: element['Estado'],
            Categoria: element['Categoria']
          });
        });
      }
    }catch(err){
      console.log("Upss"+err);
    }
  }

  private getUser(): void {
    const usuario: string | null = localStorage.getItem('user');
    if (usuario !== null) this.usuario = <Usuario>JSON.parse(usuario);
  }


  public showReport(noReporte:number){
    console.log(noReporte);
  }

}
