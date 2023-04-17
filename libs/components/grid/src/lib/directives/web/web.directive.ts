import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[web],fafn-row[web]',
  standalone: true,
})
export class WebDirective {
  @Input() web?: string | number | undefined;

  @HostBinding('class.web') get isWeb(): boolean {
    return typeof this.web === 'number' || typeof this.web === 'string';
  }
}
