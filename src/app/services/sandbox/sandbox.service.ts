import { Injectable } from '@angular/core';
import {BookService} from '../bookService/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Book} from '../../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class SandboxService {

  constructor(private bookService: BookService, private snack: MatSnackBar) { }


  /**
   * Handle Http request
   * add new Book on db
   * @param data - new book
   */
  addBook(data: Book[]): void {
    data.map(book => {
      this.bookService.addNewBook(book).subscribe(result => {
        if (!result.error){
          this.openSnack('Book added Successfully');
        }else{
          this.openSnack('Something went wrong');
        }
      });
    });
  }

  /**
   * Open snack Bar
   * @param message - Message to Preview
   */
  openSnack(message: string): void{
    this.snack.open(message, '');
  }
}
