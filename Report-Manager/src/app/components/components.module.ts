import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { ChartsModule } from 'ng2-charts';

import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BasicTableComponent } from './basic-table/basic-table.component';


@NgModule({
  declarations: [
    DoughnutChartComponent,
    BasicTableComponent
  ],
  exports: [
    DoughnutChartComponent,
    BasicTableComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class ComponentsModule { }
