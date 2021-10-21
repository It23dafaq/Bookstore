import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

/** The description of book Input must always have the first letter Uppercase  */
export function firstLetterUppercaseValidator(nameRe: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const first = /^[A-Z]*$/.test(nameRe);
    console.log(first);
    return first ? {forbiddenName: {value: control.value}} : null;
  };
}
