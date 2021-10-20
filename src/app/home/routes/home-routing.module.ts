import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeContainerComponent} from '../container/home-container/home-container.component';
import { BookPreviewComponent } from '../components/book-preview/book-preview.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'category/:id', component: BookPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

