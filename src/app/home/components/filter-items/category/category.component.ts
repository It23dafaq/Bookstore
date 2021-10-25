import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../services/bookService/book.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  value = '';
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  searchByCategory(): void{
    // Temporary solution in case its null give manual value to avoid error null toString!
    if (this.value == null){
      this.value = '';
    }
    this.bookService.getSearchedBooksByCategory(this.value);
  }
}
