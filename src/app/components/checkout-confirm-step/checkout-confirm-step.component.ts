import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-confirm-step',
  standalone: true,
  imports: [],
  templateUrl: './checkout-confirm-step.component.html',
  styleUrl: './checkout-confirm-step.component.scss'
})

export class CheckoutConfirmStepComponent {
  @Input() confirmStepFormGroup!: FormGroup<{
    firstCtrl: FormControl<string | null>;
  }>;
}
