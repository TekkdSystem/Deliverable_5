import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNurseDetailsComponent } from './update-nurse-details.component';

describe('UpdateNurseDetailsComponent', () => {
  let component: UpdateNurseDetailsComponent;
  let fixture: ComponentFixture<UpdateNurseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNurseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNurseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
