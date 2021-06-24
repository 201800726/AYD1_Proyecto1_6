import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReporteService } from 'src/app/services/reporte.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css']
})
export class ViewPhotosComponent implements OnInit {
  reporte:any;
  public imagenes!: Array<any>;
  constructor(private active:ActivatedRoute, private report:ReporteService) { }

  ngOnInit(): void {
    const parm=this.active.snapshot.params;
    this.reporte=parm.id;
    this.getImagenes();
  }

  private async getImagenes(): Promise<void> {
    try {
      const data = await this.report.get(this.reporte);

      if (data['code'] === 200) {
        if ((<Array<any>>data['data']).length > 0) {
          this.imagenes = [];
          data['data'].forEach((element: any) => {
            this.imagenes.push({
              url: `${environment.url}/uploads/${element['ruta']}`,
              nombre: element['nombre']
            })
          });
          console.log(this.imagenes);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

}
