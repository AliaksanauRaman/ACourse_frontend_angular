import { Directive, ElementRef, Input } from '@angular/core';

const DEFAULT_COLOR = 'grey';

// TODO: Not used!
@Directive({
  selector: '[acTextColor]',
})
export class TextColorDirective {
  @Input('acTextColor')
  public set color(value: string | undefined) {
    this.elementRef.nativeElement.style.color = value || DEFAULT_COLOR;
  }

  constructor(
    private readonly elementRef: ElementRef,
  ) {}
}
