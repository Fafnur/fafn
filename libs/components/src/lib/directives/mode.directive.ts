import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mode]',
  standalone: true,
})
export class ModeDirective {
  @Input() mode: 'elevated' | 'filled' | 'filled-tonal' | 'outlined' | 'text' | undefined | null = 'text';

  @HostBinding('class.fafn-mode-elevated') get isElevated(): boolean {
    return this.mode === 'elevated';
  }

  @HostBinding('class.fafn-mode-filled') get isFilled(): boolean {
    return this.mode === 'filled';
  }

  @HostBinding('class.fafn-mode-outlined') get isOutlined(): boolean {
    return this.mode === 'outlined';
  }

  @HostBinding('class.fafn-mode-text') get isText(): boolean {
    return this.mode === 'text';
  }

  @HostBinding('class.fafn-mode-filled-tonal') get isFilledTonal(): boolean {
    return this.mode === 'filled-tonal';
  }
}
