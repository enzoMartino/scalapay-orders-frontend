import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CheckoutAddressStepComponent } from '../checkout-address-step/checkout-address-step.component';
import { FormBuilder } from '@angular/forms';
import { CheckoutPaymentStepComponent } from '../checkout-payment-step/checkout-payment-step.component';
import { CHECKOUT_ADDRESS_STEP_FORM_GROUP } from '../../common/form-groups/checkout-address-step.from-group';
import { CHECKOUT_PAYMENT_STEP_FORM_GROUP } from '../../common/form-groups/checkout-payment-step.form-group';
import { CheckoutPlaceOrderStepComponent } from '../checkout-place-order-step/checkout-place-order-step.component';

@Component({
  selector: 'app-checkout-stepper',
  standalone: true,
  imports: [
    MatStepperModule,
    CheckoutAddressStepComponent,
    CheckoutPaymentStepComponent,
    CheckoutPlaceOrderStepComponent,
  ],
  templateUrl: './checkout-stepper.component.html',
  styleUrl: './checkout-stepper.component.scss',
})

export class CheckoutStepperComponent {
  isLinear = true;
  addressStepFormGroup = this._formBuilder.group(CHECKOUT_ADDRESS_STEP_FORM_GROUP);
  paymentStepFormGroup = this._formBuilder.group(CHECKOUT_PAYMENT_STEP_FORM_GROUP);

  constructor(private _formBuilder: FormBuilder) {}

  onSelectionChange(event: any) {
    console.log('Step changed', event.selectedIndex);
    if (event.previouslySelectedIndex === 0 && event.selectedIndex === 1) {
      // Retrieve form values from firstFormGroup
      console.log('First Name:', this.addressStepFormGroup.value.givenNamesCtrl);
    }
  }
}
