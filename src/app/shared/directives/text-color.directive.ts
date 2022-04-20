import { Directive, ElementRef, Input } from '@angular/core';

const DEFAULT_COLOR = 'grey';

// TODO: Not used!
@Directive({
  selector: '[acTextColor]',
})
export class TextColorDirective {
  @Input('acTextColor')
  set color(value: string | undefined) {
    this.elementRef.nativeElement.style.color = value === undefined || value === ''
      ? DEFAULT_COLOR
      : value;
  }

  constructor(
    private readonly elementRef: ElementRef,
  ) {}
}
