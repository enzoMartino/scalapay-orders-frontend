import { FormControl, Validators } from '@angular/forms';

export type CHECKOUT_PAYMENT_STEP_FORM_GROUP_TYPE = {
  paymentMethodCtrl: FormControl<string | null>;
}

export const CHECKOUT_PAYMENT_STEP_FORM_GROUP = {
  paymentMethodCtrl: ['', Validators.required],
};
