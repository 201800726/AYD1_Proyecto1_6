import { AfterViewInit, Component, OnInit } from '@angular/core';

declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ['']
})
export class PagesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    customInitFunctions();
  }
}
