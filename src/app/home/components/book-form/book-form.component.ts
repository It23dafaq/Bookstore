import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


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
    this.control.addControl('title', new FormControl(null, [Validators.maxLength(120), Validators.minLength(10), Validators.required]));
    this.control.addControl('description', new FormControl('', [Validators.required, Validators.maxLength(512), Validators.pattern(/^[A-Z].*$/)]));
    this.control.addControl('author_name', new FormControl('', [Validators.required]));
    this.control.addControl('publisher', new FormControl('', [Validators.maxLength(60), Validators.minLength(5), Validators.required]));
    this.control.addControl('year', new FormControl('', [Validators.required]));
    this.control.addControl('page_number', new FormControl('', [Validators.required]));
    this.control.addControl('rating', new FormControl('', [Validators.required]));
    this.control.addControl('isbn', new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]));
    this.control.addControl('isbn_13', new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]));
  }
}
