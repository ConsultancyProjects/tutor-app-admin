import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminHorizTopbarComponent } from './admin-horiz-topbar/admin-horiz-topbar.component';
import { AdminVerticalSidebarComponent } from './admin-vertical-sidebar/admin-vertical-sidebar.component';
import { RouterModule } from '@angular/router';
import { LMSRoutingModule } from '../lms-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { StoreModule } from '@ngrx/store';
import { AdminRoutingModule } from './admin-routing.module';
import { CategoryModule } from '../category/category.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { AssignRoleComponent } from './assign-role/assign-role.component';
import { AgGridModule } from 'ag-grid-angular';
import { HomeComponent } from './home/home.component';
import { ManageTutorsComponent } from './manage-tutors/manage-tutors.component';
import { ReassignTutorsComponent } from './reassign-tutors/reassign-tutors.component';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { RemoveStudentCourseComponent } from './remove-student-course/remove-student-course.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule, NgbAccordionModule, NgbTooltipModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AdminNavComponent,
    AdminHorizTopbarComponent,
    AdminVerticalSidebarComponent,
    ManageUserComponent,
    ManageCategoriesComponent,
    AssignRoleComponent,
    HomeComponent,
    ManageTutorsComponent,
    ReassignTutorsComponent,
    ManageStudentsComponent,
    AssignCourseComponent,
    RemoveStudentCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    TranslateModule,
    NgbDropdownModule,
    ClickOutsideModule,
    UIModule,
    SimplebarAngularModule,
    StoreModule,
    AdminRoutingModule,
    CategoryModule,
    AgGridModule.withComponents([]),
    NgbPaginationModule
  ],exports: [
    AdminNavComponent,
    AdminHorizTopbarComponent,
    AdminVerticalSidebarComponent
  ],
})
export class AdminModule { }
