import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { CheckoutAddressStepComponent } from '../checkout-shipping-step/checkout-shipping-step.component';
import { FormBuilder } from '@angular/forms';
import { CheckoutPaymentStepComponent } from '../checkout-payment-step/checkout-payment-step.component';
import { CHECKOUT_SHIPPING_STEP_FORM_GROUP, convertShippingStepFormToDto } from '../../common/form-groups/checkout-address-step.from-group';
import { CHECKOUT_PAYMENT_STEP_FORM_GROUP, convertPaymentStepFormToDto } from '../../common/form-groups/checkout-payment-step.form-group';
import { CheckoutPlaceOrderStepComponent } from '../checkout-place-order-step/checkout-place-order-step.component';
import { ShippingDetailsDto } from '../../common/dtos/shipping-details.dto';
import { PaymentDetailsDto } from '../../common/dtos/payment-details.dto';

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
  shippingDetailsDto!: ShippingDetailsDto
  paymentDetailsDto!: PaymentDetailsDto

  shippingStepFormGroup = this._formBuilder.group(
    CHECKOUT_SHIPPING_STEP_FORM_GROUP
  );
  paymentStepFormGroup = this._formBuilder.group(
    CHECKOUT_PAYMENT_STEP_FORM_GROUP
  );

  constructor(private _formBuilder: FormBuilder) {}

  onSelectionChange(event: any) {
    if (this.isShippingStepCompleted(event)) {
      this.handleShippingStepCompleted()
    } else if (this.isPaymentStepCompleted(event)) {
      this.handlePaymentStepCompleted()
    }
  }

  private isShippingStepCompleted(event: any): boolean {
    return event.previouslySelectedIndex === 0 && event.selectedIndex === 1 
  }

  private isPaymentStepCompleted(event: any): boolean {
    return event.previouslySelectedIndex === 1 && event.selectedIndex === 2
  }

  private handleShippingStepCompleted(): void {
    const shippingStepFormGroupValues = this.shippingStepFormGroup.value;
    this.shippingDetailsDto = convertShippingStepFormToDto(shippingStepFormGroupValues)
  }

  private handlePaymentStepCompleted(): void {
    const paymentStepFormGroupValues = this.paymentStepFormGroup.value;
    this.paymentDetailsDto = convertPaymentStepFormToDto(paymentStepFormGroupValues)
  }
}
