import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[align]',
  standalone: true,
})
export class AlignDirective {
  @Input() align: boolean | string | undefined | null;

  @HostBinding('class.fafn-align-start') get isStart(): boolean {
    return this.align === 'start';
  }
  @HostBinding('class.fafn-align-center') get isCenter(): boolean {
    return this.align === 'center';
  }
  @HostBinding('class.fafn-align-end') get isEnd(): boolean {
    return this.align === 'end';
  }
}
