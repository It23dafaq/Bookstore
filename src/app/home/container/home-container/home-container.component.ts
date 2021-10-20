import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BooksModel, Book} from '../../../models/book.model';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  books$!: Observable<Book[]>;
  array: any;
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(): void {
    this.books$ = this.bookservice.getBooks('/dummyData/data.json');
  }
}
