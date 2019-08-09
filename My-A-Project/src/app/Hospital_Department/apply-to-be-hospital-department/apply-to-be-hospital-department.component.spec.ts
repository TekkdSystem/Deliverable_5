import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToBeHospitalDepartmentComponent } from './apply-to-be-hospital-department.component';

describe('ApplyToBeHospitalDepartmentComponent', () => {
  let component: ApplyToBeHospitalDepartmentComponent;
  let fixture: ComponentFixture<ApplyToBeHospitalDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyToBeHospitalDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyToBeHospitalDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
