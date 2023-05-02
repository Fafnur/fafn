import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'fafn-column[tablet],[fafnColumn][fafnTablet],fafn-column[tablet-offset],[fafnColumn][fafnTabletOffset]',
  standalone: true,
})
export class TabletDirective {
  @Input() tablet?: string | number;
  @Input() fafnTablet?: string | number;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('tablet-offset') tabletOffset?: string | number;
  @Input() fafnTabletOffset?: string | number;
}
