import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GreetingsComponent} from '../components/greetings/greetings.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: '', pathMatch: 'full', component: GreetingsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
