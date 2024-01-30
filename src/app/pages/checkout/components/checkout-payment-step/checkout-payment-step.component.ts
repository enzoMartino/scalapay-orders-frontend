import { AfterContentInit, Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CHECKOUT_PAYMENT_STEP_FORM_GROUP_TYPE } from '../../../../common/form-groups/checkout-payment-step.form-group';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-checkout-payment-step',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    CommonModule,
    MatFormFieldModule,
  ],
  templateUrl: './checkout-payment-step.component.html',
  styleUrl: './checkout-payment-step.component.scss',
})
export class CheckoutPaymentStepComponent implements AfterContentInit {
  @Input() paymentStepFormGroup!: FormGroup<CHECKOUT_PAYMENT_STEP_FORM_GROUP_TYPE>;

  paymentMethods!: { value: string; viewValue: string }[];

  ngAfterContentInit(): void {
    this.paymentMethods = this.getPaymentMethods();
  }

  private getPaymentMethods(): { value: string; viewValue: string }[] {
    return [{ value: 'scalapay', viewValue: 'Scalapay' }];
  }
}
