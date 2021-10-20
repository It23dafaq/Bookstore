import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './routes/home-routing.module';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';



@NgModule({
  declarations: [HomeContainerComponent, BookPreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
