import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateInvoiceReportComponent } from './generate-invoice-report.component';

describe('GenerateInvoiceReportComponent', () => {
  let component: GenerateInvoiceReportComponent;
  let fixture: ComponentFixture<GenerateInvoiceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateInvoiceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateInvoiceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
