import { Component, Input, OnInit } from '@angular/core';

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

  /**
   * 
   */
  constructor() {
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
    console.log(this.reporte)
  }

}
