import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCRMReportComponent } from './generate-crm-report.component';

describe('GenerateCRMReportComponent', () => {
  let component: GenerateCRMReportComponent;
  let fixture: ComponentFixture<GenerateCRMReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateCRMReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCRMReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
