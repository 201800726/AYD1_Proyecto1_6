import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.css']
})
export class ReportItemComponent implements OnInit {

  /**
   * Reporte ha mostrar que se recibe del componente padre.
   */
  @Input() reporte: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.reporte.Estado === "0") {
      this.reporte.Estado = "Pendiente"
    } else if (this.reporte.Estado === "1") {
      this.reporte.Estado = "En proceso"
    } else if (this.reporte.Estado === "2") {
      this.reporte.Estado = "Finalizado"
    }
  }

  debug() {
    this.router.navigate(['chat', this.reporte.No])
    console.log(this.reporte)
  }

  viewPhotos(){
    this.router.navigate(['view-photos', this.reporte.No])
  }

}
