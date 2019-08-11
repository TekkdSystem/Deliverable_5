import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordOrientatedNursesComponent } from './record-orientated-nurses.component';

describe('RecordOrientatedNursesComponent', () => {
  let component: RecordOrientatedNursesComponent;
  let fixture: ComponentFixture<RecordOrientatedNursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordOrientatedNursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordOrientatedNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
