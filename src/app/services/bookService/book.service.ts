import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable, of, Subject} from 'rxjs';
import {Book, BooksModel} from '../../models/book.model';
import {HttpClient} from '@angular/common/http';
import {catchError, filter, map, tap} from 'rxjs/operators';
import {HomeModule} from '../../home/home.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];
  search = new Subject<Book[]>()  ;
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
          this.search?.next(this.books );
          return data.books;
        }),
        catchError(this.handleError<Book[]>('getBooks', [] ))
      );
  }
  /**
   *
   * Return all Books that contains pages lower than this number
   * @param nPage - number of pages
   */
  getSearchedBooksByPages(nPage: number): void  {
    console.log(nPage);
    if (this.books.length > 0){
      const temp = this.books.filter(books => books.pages > nPage);
      console.log(temp);
      this.search?.next(temp);
    }
  }
  /**
   *
   * Return all Books that much with ISBN.
   * @param isbn - unique key to filter books by ISBN
   */
  getSearchedBooksByISBN(isbn: string): void  {
    if (this.books.length > 0){
      const temp = this.books.filter(books => books.isbn.includes(isbn));
      console.log(temp);
      this.search?.next(temp);
    }
  }
  /**
   * Handle Http request
   * Return all Books except id avoid duplicate.
   * @param url - address of api you want to call
   * @param key - string that can be either author|publisher|title
   */
  getSearchedBooks(url: string, key: string): void  {
    if (this.books.length > 0){
      const temp = this.books.filter(books => (books.title.toLowerCase().includes(key.toLowerCase())
          || books.author.toLowerCase().includes(key.toLowerCase())
          || books.publisher.toLowerCase().includes(key.toLowerCase())) );
      console.log(temp);
      this.search?.next(temp);
    }
  }
  /**
   * Handle Http request
   * Return all Books except id avoid duplicate.
   * @param url - address of api you want to call
   * @param id - unique key to filter data
   */
  getSuggestionBooks(url: string, id: string): Observable<Book[]>  {
    if (this.books.length > 0){
       return from([this.books.filter(books => Number(books.isbn) !== Number(id))]);
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
