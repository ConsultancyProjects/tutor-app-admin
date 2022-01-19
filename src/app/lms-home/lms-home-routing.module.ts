import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LmsAppHomeComponent } from './lms-app-home/lms-app-home.component';

const routes: Routes = [
  { path: '', component: LmsAppHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LMSHomeRoutingModule { }
