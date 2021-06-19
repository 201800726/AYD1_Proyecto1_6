import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ListaReportesComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ListaReportesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
