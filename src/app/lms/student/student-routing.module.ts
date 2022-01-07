import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { ExploreTutorsComponent } from './explore-tutors/explore-tutors.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { StudentHorizTopbarComponent } from './student-horiz-topbar/student-horiz-topbar.component';
import { StudentNavComponent } from './student-nav/student-nav.component';



const routes: Routes = [
  { path : '', component : StudentHorizTopbarComponent, children: [
    { path: '',  component : StudentNavComponent},
     
    // { path: 'categories', loadChildren: () => import('../category/category.module').then(m => m.CategoryModule) },
    
    {  path: 'exploreCourses', component: ExploreCoursesComponent},
    {  path: 'myCourses', component: MyCoursesComponent},
    {  path: 'exploreTutors', component: ExploreTutorsComponent},
    {  path: 'todayClass', component: ExploreTutorsComponent},
    {  path: 'askQuestion', component: AskAQuestionComponent}
    ]}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
