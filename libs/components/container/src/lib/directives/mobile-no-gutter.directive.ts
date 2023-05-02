import { Directive } from '@angular/core';

@Directive({
  selector: 'fafn-container[mobile-no-gutter],fafnContainer[fafnMobileNoGutter]',
  standalone: true,
})
export class MobileNoGutterDirective {}
