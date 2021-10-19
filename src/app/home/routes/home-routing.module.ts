import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeContainerComponent} from '../container/home-container/home-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
// const routes: routes = [
//   { path: 'auth', canActivate: [UnauthorizedGuard], loadChildren: () => AuthModule },
//   {
//     path: '',
//     canActivate: [AuthorizedGuard],
//     loadChildren: () => import('../application/application.module').then(m => m.ApplicationModule)
//   },
//   {
//     path: 'company',
//     canActivate: [AuthorizedGuard, SelectedCompanyGuard],
//     loadChildren: () => import('../company/company.module').then(m => m.CompanyModule)
//   }
//   ];
