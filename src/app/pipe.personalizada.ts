import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCapital',
})
export class UpperCapitalPipe implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase();
  }
}
