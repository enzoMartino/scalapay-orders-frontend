import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from './services/orders.service';
import { HttpModule } from '../common/http/http.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [OrdersService]
})
export class OrdersModule { }
