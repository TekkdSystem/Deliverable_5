import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishRatingComponent } from './publish-rating.component';

describe('PublishRatingComponent', () => {
  let component: PublishRatingComponent;
  let fixture: ComponentFixture<PublishRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
