import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Role } from '../core';
import { RoleGuard } from '../shared';
import { HomeComponent } from './home/home.component';
import { LmsNavComponent } from './lms-nav/lms-nav.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: LmsNavComponent, pathMatch: 'full' },
      { path: 'admin', canActivate: [RoleGuard], data: { roles: [Role.ADMIN] }, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
      { path: 'student', canActivate: [RoleGuard], data: { roles: [Role.STUDENT] },  loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
      { path: 'tutor', canActivate: [RoleGuard], data: { roles: [Role.TUTOR] },  loadChildren: () => import('./tutor/tutor.module').then(m => m.TutorModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LMSRoutingModule { }
