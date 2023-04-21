import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[handset]',
  standalone: true,
})
export class HandsetDirective {}
