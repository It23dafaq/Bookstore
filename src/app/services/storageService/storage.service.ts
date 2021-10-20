import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';
import { Keys } from '../../models/enums/keys.enum';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  selectedBook: Book[] = [] ;
  constructor() { }
  /**
   * Store selected book
   * Sets Book for preview.
   * @param key - save data under this key on localstorage
   * @param book - data of book you want to store
   */
  setSelectedBook(key: Keys, book: Book | undefined | null): void {

    localStorage.setItem(key, JSON.stringify(book));

  }
  /**
   * return selected book
   * Get Book for preview.
   * @param key - get data that is stored under this key on localstorage
   */
  getSelectedBook(key: Keys): string | null | Book{

    return JSON.parse(localStorage.getItem(key) || '') as Book;

  }
  // TODO CREATE CREAL CACHE
  // clear() {
  //   this.messages = [];
  // }
}
