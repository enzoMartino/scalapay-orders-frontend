import { Component, Input } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  templateUrl: './checkout-address-step.component.html',
  styleUrl: './checkout-address-step.component.scss',
})

export class CheckoutAddressStepComponent {
  @Input() addressStepFormGroup!: FormGroup<{
    firstCtrl: FormControl<string | null>;
  }>;
}
