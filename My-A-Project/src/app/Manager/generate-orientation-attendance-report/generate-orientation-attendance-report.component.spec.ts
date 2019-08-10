import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOrientationAttendanceReportComponent } from './generate-orientation-attendance-report.component';

describe('GenerateOrientationAttendanceReportComponent', () => {
  let component: GenerateOrientationAttendanceReportComponent;
  let fixture: ComponentFixture<GenerateOrientationAttendanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateOrientationAttendanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateOrientationAttendanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
