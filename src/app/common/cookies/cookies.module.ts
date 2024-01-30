import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesService } from './services/cookies.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CookiesService],
})
export class CookieModule { }
