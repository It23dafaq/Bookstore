import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';


/** returns invalid if user adds greater number than given number
 * @param nmb - number
 */
export function MaxValidNumber(nmb: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isMax = nmb < control.value;
    return isMax ? {maxNumberOfPage: true} : null;
  };
}

/** returns invalid if user add more than given value words
 * @param nmb - number
 */
export function MaxWords(nmb: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isMax = nmb < control.value.trim().split(/\s+/).length;
    return isMax ? {maxWords: true} : null;
  };
}
