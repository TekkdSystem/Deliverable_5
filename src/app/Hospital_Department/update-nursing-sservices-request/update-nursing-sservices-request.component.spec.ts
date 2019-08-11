import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNursingSservicesRequestComponent } from './update-nursing-sservices-request.component';

describe('UpdateNursingSservicesRequestComponent', () => {
  let component: UpdateNursingSservicesRequestComponent;
  let fixture: ComponentFixture<UpdateNursingSservicesRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNursingSservicesRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNursingSservicesRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
