import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrientationDetailsComponent } from './search-orientation-details.component';

describe('SearchOrientationDetailsComponent', () => {
  let component: SearchOrientationDetailsComponent;
  let fixture: ComponentFixture<SearchOrientationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrientationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrientationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
