import { Component, OnInit } from '@angular/core';
import { Keys } from '../../../models/enums/keys.enum';
import { StorageService } from '../../../services/storageService/storage.service';
import { Book } from '../../../models/book.model';


@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {
  Book!: Book;
  get BookCategories(): any[]{
    return this.Book?.categories as string [];
  }
  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.Book =  this.storage.getSelectedBook(Keys.selected_book) as Book ;
    console.log(this.Book);
  }
}
