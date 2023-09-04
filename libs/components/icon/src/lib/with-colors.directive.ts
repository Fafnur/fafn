import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[withColors]',
  standalone: true,
})
export class WithColorsDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('with-colors') withColors: boolean | string | undefined | null;

  @HostBinding('class.fafn-with-colors') get isWithColors(): boolean {
    return coerceBooleanProperty(this.withColors);
  }
}
