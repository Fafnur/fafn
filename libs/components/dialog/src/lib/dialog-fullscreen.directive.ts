import { Directive } from '@angular/core';

@Directive({
  selector: 'fafn-dialog[fullscreen],fafnDialog[fafnFullscreen]',
  standalone: true,
})
export class DialogFullscreenDirective {}
