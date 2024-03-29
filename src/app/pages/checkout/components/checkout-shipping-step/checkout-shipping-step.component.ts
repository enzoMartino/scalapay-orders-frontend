import { AfterContentInit, Component, Input } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CHECKOUT_SHIPPING_STEP_FORM_GROUP_TYPE } from '../../../../common/form-groups/checkout-address-step.from-group';

@Component({
  selector: 'app-checkout-shipping-step',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './checkout-shipping-step.component.html',
  styleUrl: './checkout-shipping-step.component.scss',
})
export class CheckoutAddressStepComponent implements AfterContentInit {
  @Input() shippingStepFormGroup!: FormGroup<CHECKOUT_SHIPPING_STEP_FORM_GROUP_TYPE>;
  
  countries: { value: string; viewValue: string }[] = []

  ngAfterContentInit(): void {
    this.handleInit()
  }

  private async handleInit(): Promise<void> {
    this.countries = await this.getCountries();
  }

  private async getCountries(): Promise<{ value: string; viewValue: string }[]> {
    return [{ value: 'IT', viewValue: 'Italy' }];
  }
}
