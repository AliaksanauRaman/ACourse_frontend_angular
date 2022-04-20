import { Pipe, PipeTransform } from '@angular/core';

// TODO: Not used!
@Pipe({
  name: 'acCapitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    const [firstChar, ...otherChars] = value;
    return `${firstChar.toUpperCase()}${otherChars.join('').toLowerCase()}`;
  }
}
