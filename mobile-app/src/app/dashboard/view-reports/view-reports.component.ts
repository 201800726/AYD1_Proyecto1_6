import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/models/reporte.model';
import { AuthService } from 'src/app/services/auth.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  constructor(private reportService: ReportService, private auth: AuthService) { }

  reportList: Reporte[] = [];
  ngOnInit(): void {
    this.getUserReports()
  }

  async getUserReports() {
    try {
      const result = await this.reportService.getByCitizenID(this.auth.getUsuarioEnSesion().usuarioID)
      if (result['code'] !== 200) {
        alert("Hubo un problema")
        console.error(result);
        return
      }
      this.reportList = result.data

    } catch (err) {
      alert("Error")
      console.error(err.error)
    }
  }

}
