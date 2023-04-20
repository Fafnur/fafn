import { Directive, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[handset-offset]',
  standalone: true,
})
export class HandsetOffsetDirective {
  @Input('handset-offset') offset!: string | number;
}
