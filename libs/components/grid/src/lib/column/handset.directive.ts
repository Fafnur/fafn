import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'fafn-column[handset],[fafnColumn][fafnHandset],fafn-column[handset-offset],[fafnColumn][fafnHandsetOffset]',
  standalone: true,
})
export class HandsetDirective {
  @Input() handset?: string | number;
  @Input() fafnHandset?: string | number;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('handset-offset') handsetOffset?: string | number;
  @Input() fafnHandsetOffset?: string | number;
}
