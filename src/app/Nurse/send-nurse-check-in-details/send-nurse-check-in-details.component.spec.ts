import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNurseCheckInDetailsComponent } from './send-nurse-check-in-details.component';

describe('SendNurseCheckInDetailsComponent', () => {
  let component: SendNurseCheckInDetailsComponent;
  let fixture: ComponentFixture<SendNurseCheckInDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendNurseCheckInDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendNurseCheckInDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
