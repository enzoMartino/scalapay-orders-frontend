import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from './services/orders.service';
import { HttpModule } from '../common/http/http.module';
import { ConfigModule } from '../common/config/config.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpModule,
    ConfigModule,
  ],
  providers: [OrdersService]
})
export class OrdersModule { }
