import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[input-suffix],[fafnInputSuffix]',
  standalone: true,
})
export class InputSuffixDirective {
  @Input('input-suffix') inputSuffix: boolean | string | undefined | null;

  @HostBinding('class.fafn-input-suffix') get isSuffix(): boolean {
    return coerceBooleanProperty(this.inputSuffix);
  }
}
