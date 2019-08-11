import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainHospitalDepartmentDetailsComponent } from './maintain-hospital-department-details.component';

describe('MaintainHospitalDepartmentDetailsComponent', () => {
  let component: MaintainHospitalDepartmentDetailsComponent;
  let fixture: ComponentFixture<MaintainHospitalDepartmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainHospitalDepartmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainHospitalDepartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
