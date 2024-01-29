import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CheckoutAddressStepComponent } from '../checkout-address-step/checkout-address-step.component';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CheckoutPaymentStepComponent } from '../checkout-payment-step/checkout-payment-step.component';
import { CheckoutConfirmStepComponent } from '../checkout-confirm-step/checkout-confirm-step.component';

@Component({
  selector: 'app-checkout-stepper',
  standalone: true,
  imports: [
    MatStepperModule,
    CheckoutAddressStepComponent,
    CheckoutPaymentStepComponent,
    CheckoutConfirmStepComponent
  ],
  templateUrl: './checkout-stepper.component.html',
  styleUrl: './checkout-stepper.component.scss',
})

export class CheckoutStepperComponent {
  isLinear = true;

  addressStepFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  paymentStepFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  confirmStepFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
