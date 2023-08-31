import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[size]',
  standalone: true,
})
export class ExtraSizeDirective {
  @Input() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | undefined | null = 'medium';

  @HostBinding('class.fafn-size-xsmall') get isXSmall(): boolean {
    return this.size === 'xsmall';
  }
  @HostBinding('class.fafn-size-small') get isSmall(): boolean {
    return this.size === 'small';
  }

  @HostBinding('class.fafn-size-medium') get isMedium(): boolean {
    return this.size === 'medium';
  }

  @HostBinding('class.fafn-size-large') get isLarge(): boolean {
    return this.size === 'large';
  }

  @HostBinding('class.fafn-size-xlarge') get isXLarge(): boolean {
    return this.size === 'xlarge';
  }
}
