import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { MisReportesComponent } from './mis-reportes/mis-reportes.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { ReportComponent } from './report/report.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ChatComponent,
    MisReportesComponent,
    ListaReportesComponent,
    ReportComponent,
    EmployeeRegistrationComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ChatComponent,
    MisReportesComponent,
    ListaReportesComponent,
    ReportComponent,
    EmployeeRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
