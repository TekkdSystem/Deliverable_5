import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelOrientationBookingComponent } from './cancel-orientation-booking.component';

describe('CancelOrientationBookingComponent', () => {
  let component: CancelOrientationBookingComponent;
  let fixture: ComponentFixture<CancelOrientationBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelOrientationBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelOrientationBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
