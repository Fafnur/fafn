import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mode]',
  standalone: true,
})
export class ShortModeDirective {
  @Input() mode: 'elevated' | 'filled' | 'outlined' | string | undefined | null = 'elevated';

  @HostBinding('class.fafn-mode-elevated') get isElevated(): boolean {
    return this.mode === 'elevated';
  }

  @HostBinding('class.fafn-mode-filled') get isFilled(): boolean {
    return this.mode === 'filled';
  }

  @HostBinding('class.fafn-mode-outlined') get isOutlined(): boolean {
    return this.mode === 'outlined';
  }
}
