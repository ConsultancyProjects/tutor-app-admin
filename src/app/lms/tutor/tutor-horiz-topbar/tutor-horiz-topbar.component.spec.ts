import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorHorizTopbarComponent } from './tutor-horiz-topbar.component';

describe('TutorHorizTopbarComponent', () => {
  let component: TutorHorizTopbarComponent;
  let fixture: ComponentFixture<TutorHorizTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorHorizTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorHorizTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
