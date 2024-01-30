import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './services/logger.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LoggerService]
})
export class LoggerModule { }
