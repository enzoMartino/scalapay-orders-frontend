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
import { CHECKOUT_ADDRESS_STEP_FORM_GROUP_TYPE } from '../../common/form-groups/checkout-address-step.from-group';

@Component({
  selector: 'app-checkout-address-step',
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
  templateUrl: './checkout-address-step.component.html',
  styleUrl: './checkout-address-step.component.scss',
})
export class CheckoutAddressStepComponent implements AfterContentInit {
  @Input() addressStepFormGroup!: FormGroup<CHECKOUT_ADDRESS_STEP_FORM_GROUP_TYPE>;
  
  countries: { value: string; viewValue: string }[] = []

  ngAfterContentInit(): void {
    this.countries = this.getCountries();
  }

  private getCountries(): { value: string; viewValue: string }[] {
    return [{ value: 'IT', viewValue: 'Italy' }];
  }
}
