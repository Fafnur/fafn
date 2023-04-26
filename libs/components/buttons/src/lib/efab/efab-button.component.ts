import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

import { CanColor, ThemeColor } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-efab]',
  templateUrl: './efab-button.component.html',
  styleUrls: ['./efab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EFabButtonComponent extends ButtonBase implements CanColor {
  @Input() color: ThemeColor;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-efab]',
  templateUrl: './efab-button.component.html',
  styleUrls: ['./efab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EFabAnchorComponent extends AnchorBase implements CanColor {
  @Input() color: ThemeColor;

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
