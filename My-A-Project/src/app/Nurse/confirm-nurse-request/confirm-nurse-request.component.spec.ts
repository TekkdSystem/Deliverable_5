import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmNurseRequestComponent } from './confirm-nurse-request.component';

describe('ConfirmNurseRequestComponent', () => {
  let component: ConfirmNurseRequestComponent;
  let fixture: ComponentFixture<ConfirmNurseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmNurseRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmNurseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
