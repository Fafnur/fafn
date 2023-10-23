import { Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[fafnInput]',
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-input-native',
  },
})
export class InputDirective {
  constructor(
    public readonly elementRef: ElementRef<HTMLInputElement>,
    public readonly ngControl: NgControl,
  ) {}
}
