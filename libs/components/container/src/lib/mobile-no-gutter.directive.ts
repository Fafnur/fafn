import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-container[mobile-no-gutter]',
  standalone: true,
})
export class MobileNoGutterDirective {
  @Input('mobile-no-gutter') mobileNoGutter: boolean | string | undefined | null;

  @HostBinding('class.fafn-mobile-no-gutter') get isMobileNoGutter(): boolean {
    return coerceBooleanProperty(this.mobileNoGutter);
  }
}
