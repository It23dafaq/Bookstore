import {Component, Input, OnInit} from '@angular/core';
import { Book} from '../../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() data?: Book;
  img = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  rating = '';
  tittle = 'test';
  constructor() { }

  ngOnInit(): void {
    // this.img = this.data.img;
     // this.tittle = this.data.title;
    console.log("mpika");
  }

}
