import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';


import { HomeComponent } from './lms/home/home.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // tslint:disable-next-line: max-line-length
  { path: 'app', component: HomeComponent, loadChildren: () => import('./lms/lms.module').then(m => m.LmsModule), canActivate: [AuthGuard] },
//  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule), canActivate: [AuthGuard] },
  { path: 'home', loadChildren: () => import('./lms-home/lms-home.module').then(m => m.LmsHomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
