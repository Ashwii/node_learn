import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('../before_login/login/login.module').then(mod => mod.LoginModule)},
  { path: 'dashboard', loadChildren: () => import('../after_login/dashboard/dashboard.module').then(mod => mod.DashboardModule)},
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
