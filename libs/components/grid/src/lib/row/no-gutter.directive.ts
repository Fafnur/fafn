import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-row[no-gutter]',
  standalone: true,
})
export class NoGutterDirective {
  @Input('no-gutter') noGutter: boolean | string | undefined | null;

  @HostBinding('class.fafn-no-gutter') get isNoGutter(): boolean {
    return coerceBooleanProperty(this.noGutter);
  }
}
