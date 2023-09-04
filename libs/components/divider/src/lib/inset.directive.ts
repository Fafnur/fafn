import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-divider[inset]',
  standalone: true,
})
export class InsetDirective {
  @Input() inset: boolean | string | undefined | null;

  @HostBinding('class.fafn-inset') get isInset(): boolean {
    return coerceBooleanProperty(this.inset);
  }
}
