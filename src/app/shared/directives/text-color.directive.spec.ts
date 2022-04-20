import { By } from '@angular/platform-browser';
import { Component, DebugElement, ChangeDetectionStrategy } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { TextColorDirective } from './text-color.directive';

const ELEMENTS_WITH_DIRECTIVES_COUNT = 3;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Ordinary heading</h1>
    <h1 acTextColor="red">Red heading</h1>
    <h1 acTextColor>Grey heading</h1>
    <input #inputRef [acTextColor]="inputValue" [value]="inputValue" (input)="handleInput(inputRef.value)"/>
  `,
})
class TestComponent {
  inputValue = 'cyan';

  handleInput(newValue: string): void {
    this.inputValue = newValue;
  }
}

describe('Shared: text-color directive', () => {
  let elementsWithDirectives: Array<DebugElement>;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed
      .configureTestingModule({
        declarations: [TestComponent, TextColorDirective],
      })
      .createComponent(TestComponent);

    fixture.detectChanges();

    elementsWithDirectives = fixture.debugElement.queryAll(By.directive(TextColorDirective));
  });

  it('should have three elements with directive', () => {
    expect(elementsWithDirectives.length).toBe(ELEMENTS_WITH_DIRECTIVES_COUNT);
  });

  it('should color first heading text in red', () => {
    const hostElement: unknown = elementsWithDirectives[0].nativeElement;

    if (!(hostElement instanceof HTMLElement)) {
      throw new Error('An HTMLElement expected!');
    }

    expect(hostElement.style.color).toBe('red');
  });

  it('should color second heading text in default color (grey)', () => {
    const hostElement: unknown = elementsWithDirectives[1].nativeElement;

    if (!(hostElement instanceof HTMLElement)) {
      throw new Error('An HTMLElement expected!');
    }

    expect(hostElement.style.color).toBe('grey');
  });

  it('should color input text according to its current value', () => {
    const hostElement: unknown = elementsWithDirectives[2].nativeElement;

    if (!(hostElement instanceof HTMLInputElement)) {
      throw new Error('An HTMLElement expected!');
    }

    expect(hostElement.style.color).toBe('cyan');

    hostElement.value = 'green';
    hostElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(hostElement.style.color).toBe('green');
  });
});
