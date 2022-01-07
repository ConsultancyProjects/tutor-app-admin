import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentNavComponent } from './student-nav/student-nav.component';
import { StudentHorizTopbarComponent } from './student-horiz-topbar/student-horiz-topbar.component';
import { RouterModule } from '@angular/router';
import { LMSRoutingModule } from '../lms-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { StoreModule } from '@ngrx/store';
import { StudentRoutingModule } from './student-routing.module';

import { AgGridModule } from 'ag-grid-angular';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { TodayClassComponent } from './today-class/today-class.component';
import { ExploreTutorsComponent } from './explore-tutors/explore-tutors.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

@NgModule({
  declarations: [
    StudentNavComponent,
    StudentHorizTopbarComponent,
    HomeComponentComponent,
    ExploreCoursesComponent,
    TodayClassComponent,
    ExploreTutorsComponent,
    AskAQuestionComponent,
    MyCoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    CommonModule,
    TranslateModule,
    RouterModule,
    NgbDropdownModule,
    ClickOutsideModule,
    UIModule,
    SimplebarAngularModule,
    StoreModule,
    StudentRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class StudentModule { }
