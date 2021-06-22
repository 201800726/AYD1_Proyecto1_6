import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GreporteComponent } from './greporte/greporte.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { ReportItemComponent } from './view-reports/report-item/report-item.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    DashboardComponent,
    GreporteComponent,
    ViewReportsComponent,
    ReportItemComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports: []
})
export class DashboardModule { }
