import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNursingServicesComponent } from './request-nursing-services.component';

describe('RequestNursingServicesComponent', () => {
  let component: RequestNursingServicesComponent;
  let fixture: ComponentFixture<RequestNursingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNursingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNursingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
