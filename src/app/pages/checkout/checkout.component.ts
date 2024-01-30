import { Component } from '@angular/core';
import { CheckoutStepperComponent } from './components/checkout-stepper/checkout-stepper.component';
import { ShippingDetailsDto } from '../../common/dtos/shipping-details.dto';
import { OrdersService } from '../../orders/services/orders.service';
import { OrdersModule } from '../../orders/orders.module';
import { Router } from '@angular/router';
import { LoggerModule } from '../../common/logger/logger.module';
import { LoggerService } from '../../common/logger/services/logger.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CheckoutStepperComponent, OrdersModule, LoggerModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})

export class CheckoutComponent {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly router: Router,
    private readonly loggerService: LoggerService
  ) {}

  async handlePlaceOrderClicked(
    shippingDetailsDto: ShippingDetailsDto
  ): Promise<void> {
    try {
      const response = await this.ordersService.placeOrder({
        shippingDetails: shippingDetailsDto,
      });

      this.router.navigateByUrl(response.checkoutUrl)
    } catch (error: any) {
      this.loggerService.error(error.message)
    }
  }
}
