import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-dialog[fullscreen]',
  standalone: true,
})
export class DialogFullscreenDirective {
  @Input() fullscreen: boolean | string | undefined | null;

  @HostBinding('class.fafn-fullscreen') get isFullscreen(): boolean {
    return coerceBooleanProperty(this.fullscreen);
  }
}
