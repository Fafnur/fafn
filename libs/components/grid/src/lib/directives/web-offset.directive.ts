import { Directive, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[web-offset]',
  standalone: true,
})
export class WebOffsetDirective {
  @Input('web-offset') offset!: string | number;
}
