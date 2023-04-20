import { Directive, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'fafn-column[web],fafn-row[web]',
  standalone: true,
})
export class WebDirective {
  @Input() web?: string | number;
}
