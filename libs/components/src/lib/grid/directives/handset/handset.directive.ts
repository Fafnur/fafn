import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[handset],fafn-row[handset]',
  standalone: true,
})
export class HandsetDirective {
  @Input() handset?: string | number | undefined;

  @HostBinding('class.handset') get isHandset(): boolean {
    return typeof this.handset === 'number' || typeof this.handset === 'string';
  }
}
