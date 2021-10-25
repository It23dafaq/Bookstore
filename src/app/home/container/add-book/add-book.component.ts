import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {SandboxService} from '../../../services/sandbox/sandbox.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  formArray = new FormArray([]);
  formIsValid = false;
  get controls(): FormGroup[]{
   return this.formArray.controls as FormGroup[];
  }
  constructor(private fb: FormBuilder, private changeDetector: ChangeDetectorRef, private sandBox: SandboxService) { }
  ngOnInit(): void {
    this.formArray.push(this.fb.group({}));
    this.bookForm = this.fb.group({newBooks: this.formArray});
    // Need timeout cuz error form validity changes bcz adding new form!
    this.formArray.statusChanges.subscribe((status) => {
      setTimeout(() => {
        this.formIsValid = status === 'VALID';
      }, 10);
    });
  }
  onSubmit(): void {
    this.sandBox.addBook(this.bookForm.value.newBooks);
  }
  onAddnewBook(): void{
     this.formArray.push(this.fb.group({}, ));
  }
}
