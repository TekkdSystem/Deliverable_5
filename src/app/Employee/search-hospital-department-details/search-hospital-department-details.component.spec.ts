import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHospitalDepartmentDetailsComponent } from './search-hospital-department-details.component';

describe('SearchHospitalDepartmentDetailsComponent', () => {
  let component: SearchHospitalDepartmentDetailsComponent;
  let fixture: ComponentFixture<SearchHospitalDepartmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHospitalDepartmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHospitalDepartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
