import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book, BooksModel} from '../models/book.model';
import {HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {HomeModule} from '../home/home.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(url: string): Observable<Book[]> {
    return this.http.get<any>('./assets/dummyData/data.json')
      .pipe(
        map(data => {
          return data.books;
        }),
        catchError(this.handleError<Book[]>('getBooks', [] ))
      );
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */

}
