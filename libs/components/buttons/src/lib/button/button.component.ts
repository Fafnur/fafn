import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

import { ButtonBase } from '../button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[fafn-button],button[fafn-raised-button],button[fafn-flat-button],button[fafn-stroked-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent extends ButtonBase {
  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}

// @Component({
//   selector: `
//     button[mat-button], button[mat-raised-button], button[mat-flat-button],
//     button[mat-stroked-button]
//   `,
//   styleUrls: ['button.css', 'button-high-contrast.css'],
//   inputs: MAT_BUTTON_INPUTS,
//   host: MAT_BUTTON_HOST,
//   exportAs: 'matButton',
// })
// export class MatButton extends MatButtonBase {
//   constructor(
//     elementRef: ElementRef,
//     platform: Platform,
//     ngZone: NgZone,
//     @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string
//   ) {
//     super(elementRef, platform, ngZone, animationMode);
//   }
// }
