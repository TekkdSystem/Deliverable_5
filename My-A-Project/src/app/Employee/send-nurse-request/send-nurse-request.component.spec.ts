import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNurseRequestComponent } from './send-nurse-request.component';

describe('SendNurseRequestComponent', () => {
  let component: SendNurseRequestComponent;
  let fixture: ComponentFixture<SendNurseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendNurseRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendNurseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
