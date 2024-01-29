import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-payment-step',
  standalone: true,
  imports: [],
  templateUrl: './checkout-payment-step.component.html',
  styleUrl: './checkout-payment-step.component.scss'
})

export class CheckoutPaymentStepComponent {
  @Input() paymentStepFormGroup!: FormGroup<{
    firstCtrl: FormControl<string | null>;
  }>;
}
