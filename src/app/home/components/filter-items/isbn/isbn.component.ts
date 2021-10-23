import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../services/bookService/book.service';

@Component({
  selector: 'app-isbn',
  templateUrl: './isbn.component.html',
  styleUrls: ['./isbn.component.css']
})
export class IsbnComponent implements OnInit {
  value = '';
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  // TODO ADDING CUSTOM VALIDATION
  searchByISBN(): void{
    // Temporary solution in case its null give manual value to avoid error null toString!
    if (this.value == null){
      this.value = '';
    }
    this.bookService.getSearchedBooksByISBN(this.value.toString());
  }
}
