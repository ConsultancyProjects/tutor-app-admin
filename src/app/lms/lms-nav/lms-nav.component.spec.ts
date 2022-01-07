import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsNavComponent } from './lms-nav.component';

describe('LmsNavComponent', () => {
  let component: LmsNavComponent;
  let fixture: ComponentFixture<LmsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
