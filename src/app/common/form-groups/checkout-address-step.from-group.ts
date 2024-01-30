import { FormControl, Validators } from '@angular/forms';
import { RegexPatternsEnum } from '../enums/regex-patterns.enum';

export type CHECKOUT_ADDRESS_STEP_FORM_GROUP_TYPE = {
  givenNamesCtrl: FormControl<string | null>;
  familyNamesCtrl: FormControl<string | null>;
  cityCtrl: FormControl<string | null>;
  postalCodeCtrl: FormControl<string | null>;
  countryCtrl: FormControl<string | null>;
  addressCtrl: FormControl<string | null>;
}

export const CHECKOUT_ADDRESS_STEP_FORM_GROUP = {
  givenNamesCtrl: ['', Validators.required],
  familyNamesCtrl: ['', Validators.required],
  cityCtrl: ['', Validators.required],
  postalCodeCtrl: [
    '',
    Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern(RegexPatternsEnum.ONLY_DIGITS),
    ]),
  ],
  countryCtrl: ['', Validators.required],
  addressCtrl: ['', Validators.required],
};
