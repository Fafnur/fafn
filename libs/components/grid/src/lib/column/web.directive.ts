import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'fafn-column[web],[fafnColumn][fafnWeb],fafn-column[web-offset],[fafnColumn][fafnWebOffset]',
  standalone: true,
})
export class WebDirective {
  @Input() web?: string | number;
  @Input() fafnWeb?: string | number;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('web-offset') webOffset?: string | number;
  @Input() fafnWebOffset?: string | number;
}
