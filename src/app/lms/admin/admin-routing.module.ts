import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHorizTopbarComponent } from './admin-horiz-topbar/admin-horiz-topbar.component';

import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { AssignRoleComponent } from './assign-role/assign-role.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageTutorsComponent } from './manage-tutors/manage-tutors.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ReassignTutorsComponent } from './reassign-tutors/reassign-tutors.component';
import { RemoveStudentCourseComponent } from './remove-student-course/remove-student-course.component';


const routes: Routes = [
   { path : '', component : AdminHorizTopbarComponent, children: [
   { path: '',  component : AdminNavComponent},
    
   // { path: 'categories', loadChildren: () => import('../category/category.module').then(m => m.CategoryModule) },
   { path: 'manageCategories', component: ManageCategoriesComponent },
   { path: 'manageUsers', component: ManageUserComponent },
   { path: 'assignRole', component: AssignRoleComponent },
   { path: 'manageTutors', component: ManageTutorsComponent },
   { path: 'reassignTutors', component: ReassignTutorsComponent },
   { path: 'manageStudents', component: ManageStudentsComponent },
   { path: 'assignCourse', component: AssignCourseComponent },
   { path: 'removeStudentFromCourse', component: RemoveStudentCourseComponent },
   
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
