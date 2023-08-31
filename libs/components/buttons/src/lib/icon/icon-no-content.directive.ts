import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'button[fafn-icon-button][no-content],a[fafn-icon-button][no-content]',
  standalone: true,
})
export class IconNoContentDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('no-content') noContent: boolean | string | undefined | null;

  @HostBinding('class.fafn-mobile-no-gutter') get isMobileNoGutter(): boolean {
    return coerceBooleanProperty(this.noContent);
  }
}
