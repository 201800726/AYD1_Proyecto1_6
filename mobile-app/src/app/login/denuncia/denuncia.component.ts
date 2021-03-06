import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {

  user:any ;
  photo:any;
  photoSelected:any;
  photos: any;
  contador:any;
  constructor(private reporte: ReporteService, private router: Router) {   }
  zonas:any;
  categorias:any;
  reporteE:any;

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.getZonas();
    this.getCategorias();
    this.photos = [];
    this.contador = 0;
    this.reporteE = {
      descripcion: '',
      fechaProblema: '',
      ciudadano: '',
      zona: 0,
      categoria:0
    };

    this.addOtherPhoto();

  }

  async getZonas() {
    try {
      const data = await this.reporte.getZonas();
      if (data['code'] === 200) {
        this.zonas = <Zonas>data['data'];
      }
    } catch (err) {
      alert(err.message)
    }
  }

  async getCategorias() {
    try {
      const data = await this.reporte.getCategorias();
      if (data['code'] === 200) {
        this.categorias = <Categorias>data['data'];
      }
    } catch (err) {
      alert(err.message)
    }
  }

  async addReport(){
    try {
      const data = await this.reporte.postReport(this.reporteE);
      if (data['code'] === 200) {
        alert('añadido con exito');
        
        let idReporte = data['data']['insertId'];
        
        //For que recorre la lista de las fotos
        this.photos.forEach( async (element:any) => {
          if(element.archivo!=""){
            //añade foto por elemento que si exista y no sea nulo
            const data2 = await this.reporte.uploadPhoto(idReporte, element.archivo);
            if (data2['code'] === 200) {
              alert('añadido foto con exito');
              console.log(data);
            }
          }
        });
        this.reload();
        this.router.navigate(['']);
      }
    } catch (err) {
      alert("Algo salio mal, porfavor vuelva a ingresar de nuevo los datos")
    }
  }

  onPhotoSelected(event:any,fileU:any, fileSelectedU:any, i:any) : void {
    if (event.target.files && event.target.files[0]) {
      this.photos[i].archivo = <File>event.target.files[0];

      // Image Preview
      const reader = new FileReader();
      reader.onload = (e => this.photos[i].archivoSelected = reader.result);
      reader.readAsDataURL(this.photos[i].archivo);
    }
  }

  addOtherPhoto(){
    let tempPhoto:photo;
    tempPhoto={ titulo:'',
      archivo:'',
      archivoSelected:'',
      contador: this.contador };
    this.photos.push(tempPhoto);
    this.contador++;
    console.log(this.photos);
    
  }

  deleteOnePhoto(){
    
    if(this.contador>-1)
    {
      this.photos.pop();
      this.contador--;
    }
    

  }

}

interface photo {
  titulo:any,
  archivo:any,
  archivoSelected:any,
  contador:any
}

interface Zonas {
  zonaID?: any;
  nombre?: any;
}

interface Categorias {
  categoriaReporteID?: any;
  nombre?: any;
}
