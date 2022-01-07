import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStudentCourseComponent } from './remove-student-course.component';

describe('RemoveStudentCourseComponent', () => {
  let component: RemoveStudentCourseComponent;
  let fixture: ComponentFixture<RemoveStudentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveStudentCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStudentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
