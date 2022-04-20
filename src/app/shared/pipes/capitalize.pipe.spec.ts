import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p id="paragraph">{{ inputValue | acCapitalize }}</p>
    <input #inputRef type="text" [value]="inputValue" (input)="handleInput(inputRef.value)">
  `,
})
class TestComponent {
  inputValue = 'test';

  handleInput(newValue: string): void {
    this.inputValue = newValue;
  }
}

describe('Shared: capitalize pipe', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed
      .configureTestingModule({
        declarations: [TestComponent, CapitalizePipe],
      })
      .createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should capitalize default value from the input', () => {
    const hostElement: unknown = fixture.debugElement.nativeElement;

    if (!(hostElement instanceof HTMLElement)) {
      throw new Error('An HTMLElement expected!');
    }

    const paragraphElement: HTMLParagraphElement | null = hostElement.querySelector('#paragraph');

    expect(paragraphElement?.textContent).toBe('Test');
  });

  it('should capitalize a new value from the input', () => {
    const hostElement: unknown = fixture.debugElement.nativeElement;

    if (!(hostElement instanceof HTMLElement)) {
      throw new Error('An HTMLElement expected!');
    }

    const paragraphElement: HTMLParagraphElement | null = hostElement.querySelector('#paragraph');
    const inputElement: HTMLInputElement | null = hostElement.querySelector('input');

    if (inputElement === null) {
      throw new Error('\'inputElement\' is not found!');
    }

    inputElement.value = 'a VeRy LoNg StOrY';
    inputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(paragraphElement?.textContent).toBe('A very long story');
  });
});
