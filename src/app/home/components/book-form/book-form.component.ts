import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {firstLetterUppercaseValidator, forbiddenNameValidator} from '../../helpers/book-form-valitators';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookFg!: FormGroup;

  constructor(private fb: FormBuilder, public controlContainer: ControlContainer) { }

  get control(): FormGroup{
    return this.controlContainer.control as FormGroup;
  }
  ngOnInit(): void {
   this.bookFg = this.initBookInfo();
   // this.bookFg.addControl('new-book', this.initBookInfo2());
   this.control.addControl('bookFg', this.bookFg);
  }

  addBook(): void{
     this.bookFg.addControl('bookFg', this.initBookInfo());
    // controls?.push(this.initBookInfo());
    // this.control.addControl('new-book1', this.bookFg);
  }
  showDeleteBtn(index: number): void{
    // return index > 0 || this.bookFg?.length === 1;
  }
  removeBook(index: number): void {
    const controls = this.bookFg;
   // controls?.removeAt(index);
  }

  initBookInfo(): FormGroup{
    return this.fb.group({
      title: new FormControl( null, [ Validators.maxLength(120), Validators.minLength(10), Validators.required] ),
      description: new FormControl( '', [ Validators.required, Validators.maxLength(512), Validators.pattern(/^[A-Z].*$/)]),
      author_name: new FormControl( '', [ Validators.required]),
      publisher: new FormControl( '', [ Validators.maxLength(60), Validators.minLength(5), Validators.required]),
      year: new FormControl( '', [ Validators.required]),
      page_number: new FormControl( '', [ Validators.required]),
      options: new FormControl( '', [ Validators.required]),
      rating: new FormControl( '', [ Validators.required]),
      isbn: new FormControl( '', [ Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      isbn_13: new FormControl( '', [ Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    });
  }
}
