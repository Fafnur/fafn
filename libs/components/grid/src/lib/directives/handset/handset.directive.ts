import { Directive, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[handset],fafn-row[handset]',
  standalone: true,
})
export class HandsetDirective {
  @Input() handset?: string | number | undefined;
}
