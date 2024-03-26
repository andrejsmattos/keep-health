import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centimetersToMeters',
  standalone: true
})
export class CentimetersToMetersPipe implements PipeTransform {

  transform(value: number | undefined): unknown {
    if (value) {
      return value/100;
    } else{
      return 0;
    }
  }

}
