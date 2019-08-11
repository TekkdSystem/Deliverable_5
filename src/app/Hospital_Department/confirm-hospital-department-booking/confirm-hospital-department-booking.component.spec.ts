import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmHospitalDepartmentBookingComponent } from './confirm-hospital-department-booking.component';

describe('ConfirmHospitalDepartmentBookingComponent', () => {
  let component: ConfirmHospitalDepartmentBookingComponent;
  let fixture: ComponentFixture<ConfirmHospitalDepartmentBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmHospitalDepartmentBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmHospitalDepartmentBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
