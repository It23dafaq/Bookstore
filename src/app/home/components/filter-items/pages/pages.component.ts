import { Component, OnInit } from '@angular/core';
import {BookService} from '../../../../services/bookService/book.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  value = 'Clear me';
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  searchByPages(): void{
    this.bookService.getSearchedBooksByPages(Number(this.value));
  }
}
