import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { TextColorDirective } from "./text-color.directive";

@Component({
  template: `
    <h1>Ordinary heading</h1>
    <h1 acTextColor="red">Red heading</h1>
    <h1 acTextColor>Grey heading</h1>
    <input #inputRef [acTextColor]="inputRef.value" value="cyan"/>
  `,
})
class TestComponent {}

describe("Shared: text-color directive", () => {
  let elementsWithDirectives: Array<DebugElement>;
  let noDirectiveElement: DebugElement;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed
      .configureTestingModule({
        declarations: [TestComponent, TextColorDirective],
      })
      .createComponent(TestComponent);

    fixture.detectChanges();

    elementsWithDirectives = fixture.debugElement.queryAll(By.directive(TextColorDirective));
    noDirectiveElement = fixture.debugElement.query(By.css("h1:not([acTextColor])"));
  });

  it("should have three elements with directive", () => {
    expect(elementsWithDirectives.length).toBe(3);
  });

  it("should color first heading text in red", () => {
    const color = elementsWithDirectives[0].nativeElement.style.color;
    
    expect(color).toBe("red");
  });

  it("should color second heading text in default color (grey)", () => {
    const color = elementsWithDirectives[1].nativeElement.style.color;
    
    expect(color).toBe("grey");
  });

  it("should color input text according to its current value", () => {
    const inputElement: HTMLInputElement = elementsWithDirectives[2].nativeElement;
    
    expect(inputElement.style.color).toBe("cyan");

    inputElement.value = "green";
    inputElement.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(inputElement.style.color).toBe("green");
  });
});
