import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GreporteComponent } from './greporte/greporte.component'
import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';



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
    HttpClientModule,
    DpDatePickerModule,
    FormsModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class DashboardModule { }
