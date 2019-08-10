import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateActiveNursesReportComponent } from './generate-active-nurses-report.component';

describe('GenerateActiveNursesReportComponent', () => {
  let component: GenerateActiveNursesReportComponent;
  let fixture: ComponentFixture<GenerateActiveNursesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateActiveNursesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateActiveNursesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
