import { Directive } from '@angular/core';

@Directive({
  selector: '[prefix],[fafnPrefix]',
  standalone: true,
})
export class PrefixDirective {}
