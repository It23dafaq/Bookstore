import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../../../services/bookService/book.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Book} from '../../../models/book.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() id: string | undefined = '' ;
  data: Observable<Book[]> | null = null;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      400: {
        items: 3
      },
      600: {
        items: 4
      }
    },
    nav: true
  };
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.data = this.bookService.getSuggestionBooks('', this.id as string);
  }

}
