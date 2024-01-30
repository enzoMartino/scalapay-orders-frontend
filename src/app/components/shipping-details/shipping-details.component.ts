import { Component, Input } from '@angular/core';
import { ShippingDetailsDto } from '../../common/dtos/shipping-details.dto';
import { CountryPipe } from '../../common/pipes/country/country.pipe';

@Component({
  selector: 'app-shipping-details',
  standalone: true,
  imports: [CountryPipe],
  templateUrl: './shipping-details.component.html',
  styleUrl: './shipping-details.component.scss'
})
export class ShippingDetailsComponent {
  @Input() shippingDetailsDto?: ShippingDetailsDto
}
