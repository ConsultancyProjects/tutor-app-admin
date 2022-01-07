import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCourseStudentComponent } from './remove-course-student.component';

describe('RemoveCourseStudentComponent', () => {
  let component: RemoveCourseStudentComponent;
  let fixture: ComponentFixture<RemoveCourseStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCourseStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCourseStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
