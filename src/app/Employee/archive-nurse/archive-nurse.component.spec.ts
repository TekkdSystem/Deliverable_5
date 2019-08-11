import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveNurseComponent } from './archive-nurse.component';

describe('ArchiveNurseComponent', () => {
  let component: ArchiveNurseComponent;
  let fixture: ComponentFixture<ArchiveNurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveNurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
