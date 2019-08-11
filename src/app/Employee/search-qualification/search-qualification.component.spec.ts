import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQualificationComponent } from './search-qualification.component';

describe('SearchQualificationComponent', () => {
  let component: SearchQualificationComponent;
  let fixture: ComponentFixture<SearchQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
