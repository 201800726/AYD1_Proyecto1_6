import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { AdminGuard } from '../guards/admin.guard';
import { ChatComponent } from './chat/chat.component';
import { MisReportesComponent } from './mis-reportes/mis-reportes.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      {
        path: 'admin',
        canActivateChild: [AdminGuard],
        children: [
          { path: 'all-reports', component: ListaReportesComponent, data: { title: 'Reportes' } },
        ]
      },
      {
        path: 'employee',
        canActivateChild: [AdminGuard],
        children: [
          { path: 'chat', component: ChatComponent, data: { title: 'Chat' } },
          { path: 'my-reports', component: MisReportesComponent, data: { title: 'Mis Reportes' } },
          { path: 'report', component: ReportComponent, data: { title: 'Reporte' } },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
