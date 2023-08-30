import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-divider[middle-inset]',
  standalone: true,
})
export class MiddleInsetDirective {
  @Input('middle-inset') middleInset: boolean | string | undefined | null;

  @HostBinding('class.fafn-middle-inset') get isMiddleInset(): boolean {
    return coerceBooleanProperty(this.middleInset);
  }
}
