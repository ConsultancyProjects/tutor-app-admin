import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsAppHomeComponent } from './lms-app-home.component';

describe('LmsAppHomeComponent', () => {
  let component: LmsAppHomeComponent;
  let fixture: ComponentFixture<LmsAppHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmsAppHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
