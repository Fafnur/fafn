import { Directive } from '@angular/core';

@Directive({
  // prettier-ignore
  // eslint-disable-next-line max-len
  selector: 'button[fafn-icon-button][no-content],a[fafn-icon-button][no-content],button[fafnIconButton][fafnNoContent],a[fafnIconButton][fafnNoContent]',
  standalone: true,
})
export class NoContentDirective {}
