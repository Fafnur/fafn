import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-button],button[fafn-filled-button],button[fafn-filled-tonal-button]',
  templateUrl: '../base/button-base.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent extends ButtonBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-common],a[fafn-filled-common],a[fafn-filled-tonal-common]',
  templateUrl: '../base/button-base.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AnchorComponent extends AnchorBase {
  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
