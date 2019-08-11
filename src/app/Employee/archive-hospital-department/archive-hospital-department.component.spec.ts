import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveHospitalDepartmentComponent } from './archive-hospital-department.component';

describe('ArchiveHospitalDepartmentComponent', () => {
  let component: ArchiveHospitalDepartmentComponent;
  let fixture: ComponentFixture<ArchiveHospitalDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveHospitalDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveHospitalDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
