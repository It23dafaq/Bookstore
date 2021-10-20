import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Book} from '../../../models/book.model';
import {BookService} from '../../../services/bookService/book.service';

@Component({
  selector: 'app-preview-search',
  templateUrl: './preview-search.component.html',
  styleUrls: ['./preview-search.component.css']
})
export class PreviewSearchComponent implements OnInit {
  data: Book[] | null = null;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks('').subscribe(book => {
      this.data = book;
    });

    this.bookService.search.subscribe(book => {
        this.data = book;
    });

  }
}
