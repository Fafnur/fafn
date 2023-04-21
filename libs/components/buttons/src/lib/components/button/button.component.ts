import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { ButtonBase } from '../button-base/button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[fafn-button],button[fafn-raised-button],button[fafn-flat-button],button[fafn-stroked-button]',
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
