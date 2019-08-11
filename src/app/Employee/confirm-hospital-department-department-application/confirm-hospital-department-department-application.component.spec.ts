import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmHospitalDepartmentDepartmentApplicationComponent } from './confirm-hospital-department-department-application.component';

describe('ConfirmHospitalDepartmentDepartmentApplicationComponent', () => {
  let component: ConfirmHospitalDepartmentDepartmentApplicationComponent;
  let fixture: ComponentFixture<ConfirmHospitalDepartmentDepartmentApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmHospitalDepartmentDepartmentApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmHospitalDepartmentDepartmentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
