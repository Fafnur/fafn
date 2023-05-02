import { Directive } from '@angular/core';

@Directive({
  selector: 'fafn-divider[middle-inset],[fafnDivider][fafnMiddleInset]',
  standalone: true,
})
export class MiddleInsetDirective {}
