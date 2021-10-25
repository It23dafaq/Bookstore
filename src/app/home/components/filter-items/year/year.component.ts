import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../../../services/bookService/book.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  value = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  searchByYear(): void{
    if (this.value == null){
       this.value = '';
    }
    console.log(this.value);
    this.bookService.getSearchedBooksByYear(this.value.toString());
   // }
  }

}
