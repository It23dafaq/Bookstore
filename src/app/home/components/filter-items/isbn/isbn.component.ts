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
   this.bookService.getSearchedBooksByISBN(this.value.toString());
  }
}
