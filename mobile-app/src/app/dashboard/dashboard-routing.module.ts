import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GreporteComponent } from './greporte/greporte.component'
import { ViewReportsComponent } from './view-reports/view-reports.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: 'generarReporte', component: GreporteComponent },
{ path: 'view-reports', component: ViewReportsComponent },
{ path: 'chat', loadChildren: () => import('./view-chats/view-chats.module').then(m => m.ViewChatsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
