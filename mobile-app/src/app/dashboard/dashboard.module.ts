import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GreporteComponent } from './greporte/greporte.component'


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    GreporteComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class DashboardModule { }
