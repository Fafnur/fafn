import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[tablet],fafn-row[tablet]',
  standalone: true,
})
export class TabletDirective {
  @Input() tablet?: string | number | undefined;

  @HostBinding('class.tablet') get isTablet(): boolean {
    return typeof this.tablet === 'number' || typeof this.tablet === 'string';
  }
}
