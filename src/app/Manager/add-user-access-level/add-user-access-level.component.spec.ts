import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAccessLevelComponent } from './add-user-access-level.component';

describe('AddUserAccessLevelComponent', () => {
  let component: AddUserAccessLevelComponent;
  let fixture: ComponentFixture<AddUserAccessLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserAccessLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserAccessLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
