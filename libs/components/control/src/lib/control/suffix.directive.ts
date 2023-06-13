import { Directive } from '@angular/core';

@Directive({
  selector: '[suffix],[fafnSuffix]',
  standalone: true,
})
export class SuffixDirective {}
