import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[tablet]',
  standalone: true,
})
export class TabletDirective {}
