import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOrientationComponent } from './book-orientation.component';

describe('BookOrientationComponent', () => {
  let component: BookOrientationComponent;
  let fixture: ComponentFixture<BookOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
