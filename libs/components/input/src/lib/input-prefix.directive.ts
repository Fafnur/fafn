import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[input-prefix],[fafnInputPrefix]',
  standalone: true,
})
export class InputPrefixDirective {
  @Input('input-prefix') inputPrefix: boolean | string | undefined | null;

  @HostBinding('class.fafn-input-prefix') get isPrefix(): boolean {
    return coerceBooleanProperty(this.inputPrefix);
  }
}
