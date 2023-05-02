import { Directive } from '@angular/core';

@Directive({
  selector: 'fafn-row[no-gutter],[fafnRow][fafnNoGutter]',
  standalone: true,
})
export class NoGutterDirective {}
