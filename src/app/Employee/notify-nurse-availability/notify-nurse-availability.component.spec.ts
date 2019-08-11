import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyNurseAvailabilityComponent } from './notify-nurse-availability.component';

describe('NotifyNurseAvailabilityComponent', () => {
  let component: NotifyNurseAvailabilityComponent;
  let fixture: ComponentFixture<NotifyNurseAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyNurseAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyNurseAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
