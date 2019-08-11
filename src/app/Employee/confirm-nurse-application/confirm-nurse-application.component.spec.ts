import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNurseApplicationComponent } from './confirm-nurse-application.component';

describe('ConfirmNurseApplicationComponent', () => {
  let component: ConfirmNurseApplicationComponent;
  let fixture: ComponentFixture<ConfirmNurseApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmNurseApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNurseApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
