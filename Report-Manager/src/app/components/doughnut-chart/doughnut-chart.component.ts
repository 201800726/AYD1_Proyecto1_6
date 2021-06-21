import { Component, Input, OnInit } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styles: []
})
export class DoughnutChartComponent implements OnInit {
  @Input() title: string;
  @Input('labels') doughnutChartLabels: Array<Label>;
  @Input('data') doughnutChartData: MultiDataSet;

  constructor() {
    this.title = 'Title';
    this.doughnutChartLabels = ['Label 1', 'Label 2', 'Label 3'];
    this.doughnutChartData = [[350, 450, 100]];
  }

  ngOnInit(): void { }

  public doughnutColors: Color[] = [
    { backgroundColor: ['#745AF2', '#FFB22B', '#EF5350'] }
  ];
}
