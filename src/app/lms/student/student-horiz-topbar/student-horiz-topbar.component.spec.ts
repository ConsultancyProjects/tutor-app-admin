import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHorizTopbarComponent } from './student-horiz-topbar.component';

describe('StudentHorizTopbarComponent', () => {
  let component: StudentHorizTopbarComponent;
  let fixture: ComponentFixture<StudentHorizTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHorizTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHorizTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
