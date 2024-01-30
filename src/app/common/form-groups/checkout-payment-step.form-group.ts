import { FormControl, Validators } from '@angular/forms';
import { PaymentDetailsDto } from '../dtos/payment-details.dto';

export type CHECKOUT_PAYMENT_STEP_FORM_GROUP_TYPE = {
  paymentMethodCtrl: FormControl<string | null>;
};

export const CHECKOUT_PAYMENT_STEP_FORM_GROUP = {
  paymentMethodCtrl: ['', Validators.required],
};

export function convertPaymentStepFormToDto(
  values: Partial<{
    paymentMethodCtrl: string | null;
  }>
): PaymentDetailsDto {
  return new PaymentDetailsDto(values.paymentMethodCtrl || '');
}
