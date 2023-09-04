import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[selected]',
  standalone: true,
})
export class IconSelectedDirective {
  @Input() selected: boolean | undefined | null;

  @HostBinding('class.fafn-selected') get isSelected(): boolean {
    return coerceBooleanProperty(this.selected);
  }
}
