import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[fullscreen]',
  standalone: true,
})
export class DialogFullscreenDirective {}
