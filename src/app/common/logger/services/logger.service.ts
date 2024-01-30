import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  error(message: string): void {
    console.log(message)
  }
}
