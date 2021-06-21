import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { GreporteComponent } from './greporte/greporte.component'

const routes: Routes = [{ path: '', component: DashboardComponent },
  {path: 'generarReporte', component: GreporteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
