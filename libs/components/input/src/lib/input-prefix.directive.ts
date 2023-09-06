import { Directive } from '@angular/core';

@Directive({
  selector: '[input-prefix],[fafnInputPrefix]',
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-input-prefix',
  },
})
export class InputPrefixDirective {}
