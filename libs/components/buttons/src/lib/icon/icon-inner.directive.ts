import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'button[fafn-icon-button][inner],button[fafnIconButton][inner],a[fafn-icon-button][inner],a[fafnIconButton][inner]',
  standalone: true,
})
export class IconInnerDirective {
  @Input() inner: boolean | string | undefined | null;

  @HostBinding('class.fafn-inner') get isInner(): boolean {
    return coerceBooleanProperty(this.inner);
  }
}
