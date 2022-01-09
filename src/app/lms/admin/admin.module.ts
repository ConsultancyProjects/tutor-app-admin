import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminHorizTopbarComponent } from './admin-horiz-topbar/admin-horiz-topbar.component';
import { AdminVerticalSidebarComponent } from './admin-vertical-sidebar/admin-vertical-sidebar.component';
import { RouterModule } from '@angular/router';
import { LMSRoutingModule } from '../lms-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { ClickOutsideModule } from 'ng-click-outside';
import {
  NgbAlertModule, NgbCarouselModule, NgbDropdownModule, NgbModalModule, NgbProgressbarModule,
  NgbTooltipModule, NgbPopoverModule, NgbPaginationModule, NgbNavModule, NgbAccordionModule,
  NgbCollapseModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AgmCoreModule } from '@agm/core';
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
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';


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
    RemoveStudentCourseComponent,
    CreateCourseComponent,
    EditCourseComponent,
    ViewCoursesComponent
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
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    NgbAlertModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbPaginationModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbCollapseModule,
    NgxYoutubePlayerModule
  ],exports: [
    AdminNavComponent,
    AdminHorizTopbarComponent,
    AdminVerticalSidebarComponent
  ],
})
export class AdminModule { }
