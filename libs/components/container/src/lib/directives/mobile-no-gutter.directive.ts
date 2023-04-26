import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-container[mobile-no-gutter]',
  standalone: true,
})
export class MobileNoGutterDirective {}
