import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrientationScheduleComponent } from './create-orientation-schedule.component';

describe('CreateOrientationScheduleComponent', () => {
  let component: CreateOrientationScheduleComponent;
  let fixture: ComponentFixture<CreateOrientationScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrientationScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrientationScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
