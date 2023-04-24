import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { ButtonBase } from '../button-base/button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector,max-len
  selector: `button[fafn-button],button[fafn-elevated-button],button[fafn-filled-button],button[fafn-filled-tonal-button],button[fafn-outlined-button],button[fafn-icon-button],button[fafn-segmented-button],button[fafn-fab-button],button[fafn-efab-button]`,
  templateUrl: '../button-base/button-base.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent extends ButtonBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
