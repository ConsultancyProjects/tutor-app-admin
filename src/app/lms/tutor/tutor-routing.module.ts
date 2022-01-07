import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AnswerQuestionComponent } from './answer-question/answer-question.component';
import { AssignCourseStudentComponent } from './assign-course-student/assign-course-student.component';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { ExploreTutorsComponent } from './explore-tutors/explore-tutors.component';
import { RemoveCourseStudentComponent } from './remove-course-student/remove-course-student.component';
import { TodayClassComponent } from './today-class/today-class.component';
import { TutorHorizTopbarComponent } from './tutor-horiz-topbar/tutor-horiz-topbar.component';
import { TutorNavComponent } from './tutor-nav/tutor-nav.component';



const routes: Routes = [
  { path : '', component : TutorHorizTopbarComponent, children: [
    { path: '',  component : TutorNavComponent},
     
    { path: 'exploreCourses', component: ExploreCoursesComponent },
    { path: 'todayClass', component: TodayClassComponent },
    { path: 'exploreTutors', component: ExploreTutorsComponent },
    { path: 'answerQuestion', component: AnswerQuestionComponent },
    { path: 'assignCourse', component: AssignCourseStudentComponent },
    
    { path: 'removeStudentFromCourse', component: RemoveCourseStudentComponent },
    
    ]}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
