import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

import { ButtonMode, ButtonSize } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-button],button[fafnButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent extends ButtonBase {
  @Input() size: ButtonSize;
  @Input() mode: ButtonMode;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-button],a[fafnButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AnchorComponent extends AnchorBase {
  @Input() size: ButtonSize;
  @Input() mode: ButtonMode;

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
