import { Directive } from '@angular/core';

@Directive({
  selector: 'fafn-divider[inset],[fafnDivider][fafnInset]',
  standalone: true,
})
export class InsetDirective {}
