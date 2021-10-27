import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MaxValidNumber, MaxWords} from '../../helpers/book-form-valitators';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(private fb: FormBuilder, public controlContainer: ControlContainer) {
  }

  get control(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.initBooks();
  }

  initBooks(): void {
    this.control.addControl('id', new FormControl(Math.random()));
    this.control.addControl('title', new FormControl(null, [Validators.maxLength(120),
      Validators.minLength(10), Validators.required, Validators.pattern(/^[ A-Za-z0-9_@./#&*!”]*$/)]));
    this.control.addControl('description', new FormControl('', [Validators.required,
      Validators.maxLength(512), Validators.pattern(/^[A-Z].*$/)]));
    this.control.addControl('author', new FormControl('', [Validators.required, MaxWords(3)]));
    this.control.addControl('categories', new FormControl('', [Validators.required, MaxWords(4)]));
    this.control.addControl('publisher', new FormControl('', [Validators.maxLength(60), Validators.minLength(5), Validators.required]));
    this.control.addControl('published', new FormControl('', [Validators.required,
      Validators.min(0), Validators.max(new Date().getFullYear()), Validators.pattern(/^[0-9]{4}$/)]));
    this.control.addControl('pages', new FormControl('', [Validators.required, MaxValidNumber(9999), Validators.min(1)]));
    this.control.addControl('rating', new FormControl('1', [Validators.required]));
    this.control.addControl('isbn', new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]));
    this.control.addControl('isbn_13', new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{13}$/)]));
  }
}
