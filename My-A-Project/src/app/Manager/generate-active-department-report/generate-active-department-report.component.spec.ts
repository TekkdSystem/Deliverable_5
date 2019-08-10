import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateActiveDepartmentReportComponent } from './generate-active-department-report.component';

describe('GenerateActiveDepartmentReportComponent', () => {
  let component: GenerateActiveDepartmentReportComponent;
  let fixture: ComponentFixture<GenerateActiveDepartmentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateActiveDepartmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateActiveDepartmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
