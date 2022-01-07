import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LmsNavComponent } from './lms-nav/lms-nav.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
      {
        path: '', component: LmsNavComponent, pathMatch: 'full'
      },
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
    { path: 'tutor', loadChildren: () => import('./tutor/tutor.module').then(m => m.TutorModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LMSRoutingModule { }
