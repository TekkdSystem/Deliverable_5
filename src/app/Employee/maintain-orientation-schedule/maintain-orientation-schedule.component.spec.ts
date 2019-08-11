import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainOrientationScheduleComponent } from './maintain-orientation-schedule.component';

describe('MaintainOrientationScheduleComponent', () => {
  let component: MaintainOrientationScheduleComponent;
  let fixture: ComponentFixture<MaintainOrientationScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainOrientationScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainOrientationScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
