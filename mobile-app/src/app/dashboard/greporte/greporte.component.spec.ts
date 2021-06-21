import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreporteComponent } from './greporte.component';

describe('GreporteComponent', () => {
  let component: GreporteComponent;
  let fixture: ComponentFixture<GreporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
