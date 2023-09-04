import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[color]',
  standalone: true,
})
export class ColorDirective {
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'surface' | null | undefined = 'primary';

  @HostBinding('class.fafn-color-primary') get isPrimary(): boolean {
    return this.color === 'primary';
  }

  @HostBinding('class.fafn-color-secondary') get isSecondary(): boolean {
    return this.color === 'secondary';
  }

  @HostBinding('class.fafn-color-tertiary') get isTertiary(): boolean {
    return this.color === 'tertiary';
  }

  @HostBinding('class.fafn-color-surface') get isSurface(): boolean {
    return this.color === 'surface';
  }
}
