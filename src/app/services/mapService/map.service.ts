import { Injectable } from '@angular/core';
import {Book} from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }
  /**
   * return array of categories
   * @param data - type Book
   */
  mapBooks(data: Book): Book{
    data.isbn = data.isbn.toString();
    data.isbn_13 = data.isbn_13.toString();
    data.categories = (data.categories  as string).split(' ', 4);
    return data;
  }
}
