import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelNurseRequestComponent } from './cancel-nurse-request.component';

describe('CancelNurseRequestComponent', () => {
  let component: CancelNurseRequestComponent;
  let fixture: ComponentFixture<CancelNurseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelNurseRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelNurseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
