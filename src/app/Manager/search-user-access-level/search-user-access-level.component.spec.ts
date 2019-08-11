import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserAccessLevelComponent } from './search-user-access-level.component';

describe('SearchUserAccessLevelComponent', () => {
  let component: SearchUserAccessLevelComponent;
  let fixture: ComponentFixture<SearchUserAccessLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserAccessLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserAccessLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
