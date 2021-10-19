import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
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
