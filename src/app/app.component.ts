import { AfterContentInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CookieModule } from './common/cookies/cookies.module';
import { CookiesService } from './common/cookies/services/cookies.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheckoutComponent, CookieModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterContentInit {
  title = 'scalapay-orders-frontend';

  constructor(private readonly cookiesService: CookiesService){}

  ngAfterContentInit(): void {
    this.handleInit()
  }

  private async handleInit(): Promise<void> {
    const clientID = await this.getClientID()
    this.cookiesService.setClientIdCookie(clientID)
  } 

  private async getClientID(): Promise<string> {
    return '123'
  }
}
