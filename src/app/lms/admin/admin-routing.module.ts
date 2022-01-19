import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminHorizTopbarComponent } from './admin-horiz-topbar/admin-horiz-topbar.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { AssignRoleComponent } from './assign-role/assign-role.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ManageBatchComponent } from './manage-batch/manage-batch.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageSubcategoriesComponent } from './manage-subcategories/manage-subcategories.component';
import { ManageTutorsComponent } from './manage-tutors/manage-tutors.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ReassignTutorsComponent } from './reassign-tutors/reassign-tutors.component';
import { RemoveStudentCourseComponent } from './remove-student-course/remove-student-course.component';
import { ScheduleCourseComponent } from './schedule-course/schedule-course.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';


const routes: Routes = [
   { path: '', component : AdminHorizTopbarComponent, children: [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent},
   // { path: 'categories', loadChildren: () => import('../category/category.module').then(m => m.CategoryModule) },
   { path: 'manageCategories', component: ManageCategoriesComponent },
   { path: 'manageSubCategories', component: ManageSubcategoriesComponent },
   { path: 'manageUsers', component: ManageUserComponent },
   { path: 'assignRole', component: AssignRoleComponent },
   { path: 'manageTutors', component: ManageTutorsComponent },
   { path: 'manageBatch', component: ManageBatchComponent },
   { path: 'reassignTutors', component: ReassignTutorsComponent },
   { path: 'manageStudents', component: ManageStudentsComponent },
   { path: 'assignCourse', component: AssignCourseComponent },
   { path: 'removeStudentFromCourse', component: RemoveStudentCourseComponent },
   { path: 'createCourse', component: CreateCourseComponent},
   { path: 'editCourse', component: EditCourseComponent},
   { path: 'viewCourses', component: ViewCoursesComponent},
   { path: 'scheduleCourse', component: ScheduleCourseComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
