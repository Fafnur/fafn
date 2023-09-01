import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[lower]',
  standalone: true,
})
export class LowerDirective {
  @Input() lower: boolean | string | undefined | null;

  @HostBinding('class.fafn-lower') get isLowered(): boolean {
    return coerceBooleanProperty(this.lower);
  }
}
