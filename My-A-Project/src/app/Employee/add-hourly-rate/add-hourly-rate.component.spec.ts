import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHourlyRateComponent } from './add-hourly-rate.component';

describe('AddHourlyRateComponent', () => {
  let component: AddHourlyRateComponent;
  let fixture: ComponentFixture<AddHourlyRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHourlyRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHourlyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
