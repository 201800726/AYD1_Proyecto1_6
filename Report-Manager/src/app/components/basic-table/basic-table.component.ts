import { AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styles: []
})
export class BasicTableComponent implements OnInit, AfterViewInit {
  @Input() pageSize: number;
  public dataSource: MatTableDataSource<any>;


  @Input() title: string;
  @Input() subtitle: string;
  @Input('labels') displayedColumns: Array<string>;
  @Input('data') data: Array<any>;

  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.pageSize = 10;
    this.dataSource = new MatTableDataSource<any>();

    this.title = '';
    this.subtitle = '';
    this.displayedColumns = ['Label 1', 'Label 2', 'Label 3'];
    this.data = [{ 'Label 1': 1, 'Label 2': 2, 'Label 3': 3 }];
  }

  ngOnInit(): void { this.dataSource.data = this.data; }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
