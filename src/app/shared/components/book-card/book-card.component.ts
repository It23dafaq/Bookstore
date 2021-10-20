import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../models/book.model';
import {StorageService} from '../../../services/storageService/storage.service';
import {Keys} from '../../../models/enums/keys.enum';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() data?: Book | null | undefined ;
  @Input() isEnable = true;
  img = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  rating = '';
  tittle = 'test';

  constructor(private storage: StorageService) { }

  ngOnInit(): void {

  }
  setSelectedItem(): void {

    this.storage.setSelectedBook(Keys.selected_book, this.data as Book);

  }
}
