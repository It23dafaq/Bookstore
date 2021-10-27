import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {BookService} from '../../../services/bookService/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = new FormControl('', [Validators.required, Validators.email]);
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
 searchBooks(event: any): void{
      const value = (event.target as HTMLInputElement).value;
      this.bookService.getSearchedBooks('', value);
 }
}
