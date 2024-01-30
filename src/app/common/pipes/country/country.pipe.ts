import { Pipe, PipeTransform } from '@angular/core';
import { COUNTRIES_MAP, CountriesEnum } from '../../enums/countries.enum';

@Pipe({
  name: 'country',
  standalone: true
})
export class CountryPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case CountriesEnum.italy:
        return COUNTRIES_MAP.get(value)
      default:
        return ''
    } 
  }
}
