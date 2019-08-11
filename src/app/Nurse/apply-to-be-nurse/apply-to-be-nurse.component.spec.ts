import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToBeNurseComponent } from './apply-to-be-nurse.component';

describe('ApplyToBeNurseComponent', () => {
  let component: ApplyToBeNurseComponent;
  let fixture: ComponentFixture<ApplyToBeNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyToBeNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyToBeNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
