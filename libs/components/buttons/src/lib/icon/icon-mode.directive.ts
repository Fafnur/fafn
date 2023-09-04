import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mode]',
  standalone: true,
})
export class IconModeDirective {
  @Input() mode: 'filled' | 'filled-tonal' | 'outlined' | 'standard' | undefined | null = 'standard';

  @HostBinding('class.fafn-mode-standard') get isStandard(): boolean {
    return this.mode === 'standard';
  }

  @HostBinding('class.fafn-mode-filled') get isFilled(): boolean {
    return this.mode === 'filled';
  }

  @HostBinding('class.fafn-mode-filled-tonal') get isFilledTonal(): boolean {
    return this.mode === 'filled-tonal';
  }

  @HostBinding('class.fafn-mode-outlined') get isOutlined(): boolean {
    return this.mode === 'outlined';
  }
}
