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
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PreviewSearchComponent } from './container/preview-search/preview-search.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DatepickerComponent } from './components/filter-items/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IsbnComponent } from './components/filter-items/isbn/isbn.component';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './components/filter-items/pages/pages.component';
import { AddBookComponent } from './container/add-book/add-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { MatSelectModule } from '@angular/material/select';
import { YearComponent } from './components/filter-items/year/year.component';
import { CategoryComponent } from './components/filter-items/category/category.component';

@NgModule({
  declarations: [HomeContainerComponent, BookPreviewComponent, SearchComponent, PreviewSearchComponent, FiltersComponent,
    DatepickerComponent, IsbnComponent, PagesComponent, AddBookComponent, BookFormComponent, YearComponent, CategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule
  ]
})
export class HomeModule { }
