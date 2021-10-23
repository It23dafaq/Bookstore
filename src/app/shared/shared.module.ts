import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';

// exports
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { RouterModule } from '@angular/router';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [TopToolbarComponent, BookCardComponent, SuggestionComponent, FooterComponent],
  exports: [
    TopToolbarComponent,
    BookCardComponent,
    SuggestionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule,
    CarouselModule
  ]
})
export class SharedModule { }
