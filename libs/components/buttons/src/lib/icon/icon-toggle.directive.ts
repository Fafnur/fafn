import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[toggle]',
  standalone: true,
})
export class IconToggleDirective {
  @Input() toggle: boolean | undefined | null;

  @HostBinding('class.fafn-toggle') get isToggle(): boolean {
    return coerceBooleanProperty(this.toggle);
  }
}
