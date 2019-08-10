import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHourlyRateComponent } from './update-hourly-rate.component';

describe('UpdateHourlyRateComponent', () => {
  let component: UpdateHourlyRateComponent;
  let fixture: ComponentFixture<UpdateHourlyRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHourlyRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHourlyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
