import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorNavComponent } from './tutor-nav/tutor-nav.component';
import { TutorHorizTopbarComponent } from './tutor-horiz-topbar/tutor-horiz-topbar.component';

import { RouterModule } from '@angular/router';
import { LMSRoutingModule } from '../lms-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { StoreModule } from '@ngrx/store';
import { TutorRoutingModule } from './tutor-routing.module';
import { ExploreTutorsComponent } from './explore-tutors/explore-tutors.component';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';
import { AssignCourseStudentComponent } from './assign-course-student/assign-course-student.component';
import { RemoveCourseStudentComponent } from './remove-course-student/remove-course-student.component';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { TodayClassComponent } from './today-class/today-class.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TutorNavComponent,
    TutorHorizTopbarComponent,
    ExploreTutorsComponent,
    AnswerQuestionComponent,
    AssignCourseStudentComponent,
    RemoveCourseStudentComponent,
    ExploreCoursesComponent,
    TodayClassComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FullCalendarModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,
    ClickOutsideModule,
    UIModule,
    SimplebarAngularModule,
    StoreModule,
    TutorRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class TutorModule { }
