import { Directive } from '@angular/core';

@Directive({
  selector: '[input-suffix],[fafnInputSuffix]',
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-input-suffix',
  },
})
export class InputSuffixDirective {}
