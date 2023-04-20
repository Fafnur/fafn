import { Directive, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[tablet-offset]',
  standalone: true,
})
export class TabletOffsetDirective {
  @Input('tablet-offset') offset!: string | number;
}
