import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainUserAccessLevelComponent } from './maintain-user-access-level.component';

describe('MaintainUserAccessLevelComponent', () => {
  let component: MaintainUserAccessLevelComponent;
  let fixture: ComponentFixture<MaintainUserAccessLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainUserAccessLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainUserAccessLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
