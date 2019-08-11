import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComplaintComponent } from './delete-complaint.component';

describe('DeleteComplaintComponent', () => {
  let component: DeleteComplaintComponent;
  let fixture: ComponentFixture<DeleteComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
