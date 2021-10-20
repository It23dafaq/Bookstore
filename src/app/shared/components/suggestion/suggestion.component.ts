import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../../../services/bookService/book.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() id: string | undefined = '' ;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    console.log(this.bookService.getSuggestionBooks('', this.id as string));
  }

}
