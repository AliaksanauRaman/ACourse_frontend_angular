import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from "@angular/core";

import { CapitalizePipe } from './capitalize.pipe';

@Component({
  template: `
    <p id="paragraph">{{ inputRef.value | acCapitalize }}</p>
    <input #inputRef type="text" value="test">
  `,
})
class TestComponent {}

describe("Shared: capitalize pipe", () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed
      .configureTestingModule({
        declarations: [TestComponent, CapitalizePipe],
      })
      .createComponent(TestComponent);

    fixture.detectChanges();
  });

  it("should capitalize default value from the input", () => {
    const paragraphElement: HTMLParagraphElement | null = fixture.nativeElement.querySelector("#paragraph");

    expect(paragraphElement?.textContent).toBe("Test");
  });

  it("should capitalize a new value from the input", () => {
    const paragraphElement: HTMLParagraphElement | null = fixture.nativeElement.querySelector("#paragraph");
    const inputElement: HTMLInputElement | null = fixture.nativeElement.querySelector("input");

    if (inputElement === null) {
      throw new Error("'inputElement' is not found!");
    }

    inputElement.value = "a VeRy LoNg StOrY";
    inputElement.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(paragraphElement?.textContent).toBe("A very long story");
  });
});
