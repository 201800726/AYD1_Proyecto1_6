import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { MisReportesComponent } from './mis-reportes/mis-reportes.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ChatComponent,
    MisReportesComponent,
    ListaReportesComponent,
    ReportComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ChatComponent,
    MisReportesComponent,
    ListaReportesComponent,
    ReportComponent
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
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
