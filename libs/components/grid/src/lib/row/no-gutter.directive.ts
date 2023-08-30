import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-row[no-gutter]',
  standalone: true,
})
export class NoGutterDirective {
  @Input('no-gutter') noGutter: boolean | string | undefined | null;

  @HostBinding('class.fafn-no-gutter') get isNoGutter(): boolean {
    if (typeof this.noGutter === 'undefined') {
      return true;
    } else if (typeof this.noGutter === 'boolean') {
      return this.noGutter;
    } else if (typeof this.noGutter === 'string') {
      return this.noGutter === '' ? true : this.noGutter === 'true';
    } else {
      return false;
    }
  }
}
