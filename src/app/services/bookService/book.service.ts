import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book, BooksModel} from '../../models/book.model';
import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {HomeModule} from '../../home/home.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];
  constructor(private http: HttpClient) { }
  /**
   * Handle Http request
   * Return all Books.
   * @param url - address of api you want to call
   */
  getBooks(url: string): Observable<Book[]> {
    return this.http.get<any>('./assets/dummyData/data.json')
      .pipe(
        map(data => {
          this.books = data.books;
          return data.books;
        }),
        catchError(this.handleError<Book[]>('getBooks', [] ))
      );
  }
  /**
   * Handle Http request
   * Return all Books except id avoid duplicate.
   * @param url - address of api you want to call
   * @param id - unique key to filter data
   */
  getSuggestionBooks(url: string, id: string): Observable<Book[]> | Book[]  {
    if (this.books.length > 0){
       return this.books.filter(books => Number(books.isbn) !== Number(id));
    }else {
      return this.http.get<any>('./assets/dummyData/data.json')
        .pipe(
          map(data => {
            return data.books;
          }),
          catchError(this.handleError<Book[]>('getBooks', []))
        );
    }
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */

}
