import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'fafn-input,input[fafnInput]',
  standalone: true,
})
export class InputDirective {
  constructor(
    public readonly elementRef: ElementRef<HTMLInputElement>,
    public readonly ngControl: NgControl,
  ) {}
}
