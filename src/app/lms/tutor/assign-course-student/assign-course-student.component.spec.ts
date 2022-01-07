import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCourseStudentComponent } from './assign-course-student.component';

describe('AssignCourseStudentComponent', () => {
  let component: AssignCourseStudentComponent;
  let fixture: ComponentFixture<AssignCourseStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignCourseStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCourseStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
