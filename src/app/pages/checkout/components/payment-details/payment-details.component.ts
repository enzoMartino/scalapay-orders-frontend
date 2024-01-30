import { Component, Input } from '@angular/core';
import { PaymentDetailsDto } from '../../../../common/dtos/payment-details.dto';
import { PaymentMethodPipe } from '../../../../common/pipes/payment-method/payment-method.pipe';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentMethodPipe],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.scss'
})
export class PaymentDetailsComponent {
  @Input() paymentDetailsDto?: PaymentDetailsDto
}
