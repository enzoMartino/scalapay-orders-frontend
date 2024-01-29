import { Component } from '@angular/core';
import { CheckoutStepperComponent } from '../../components/checkout-stepper/checkout-stepper.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CheckoutStepperComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})

export class CheckoutComponent {

}
