import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrientationScheduleComponent } from './view-orientation-schedule.component';

describe('ViewOrientationScheduleComponent', () => {
  let component: ViewOrientationScheduleComponent;
  let fixture: ComponentFixture<ViewOrientationScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrientationScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrientationScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
