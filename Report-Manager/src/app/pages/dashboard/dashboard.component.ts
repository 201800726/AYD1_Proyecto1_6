import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  public dataTable: any;
  public labelsTable!: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.dataTable = [{}];
    this.labelsTable = Object.keys(this.dataTable[0]);
  }
}
