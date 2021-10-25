import { Injectable } from '@angular/core';
import {BookService} from '../bookService/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Book} from '../../models/book.model';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

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
  addBook(data: Book[]): void{
    data.map(book => {
      this.bookService.addNewBook(book).subscribe(result => {
        console.log(result);
        if (!result.error){
          this.snack.open('Book added Succecfully', '');
        }else{
          this.snack.open('Something went wrong', '');
        }
      });
    });
     // this.bookService.addNewBook(data).subscribe(result => {
     //    console.log(result);
     //    if (!result.error){
     //      this.snack.open('Book added Succecfully', '');
     //    }else{
     //      this.snack.open('Something went wrong', '');
     //    }
     // });

  }
}
