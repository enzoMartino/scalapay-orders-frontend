import { Component, Input } from '@angular/core';
import { ShippingDetailsDto } from '../../../../common/dtos/shipping-details.dto';
import { PaymentDetailsDto } from '../../../../common/dtos/payment-details.dto';
import { CommonModule } from '@angular/common';
import { ShippingDetailsComponent } from '../shipping-details/shipping-details.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';

@Component({
  selector: 'app-checkout-place-order-step',
  standalone: true,
  imports: [CommonModule, ShippingDetailsComponent, PaymentDetailsComponent],
  templateUrl: './checkout-place-order-step.component.html',
  styleUrl: './checkout-place-order-step.component.scss',
})
export class CheckoutPlaceOrderStepComponent {
  @Input() shippingDetailsDto?: ShippingDetailsDto
  @Input() paymentDetailsDto?: PaymentDetailsDto
}
