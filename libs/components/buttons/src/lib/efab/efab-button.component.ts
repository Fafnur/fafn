import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

import { FabColor } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-efab],button[fafnEfab]',
  templateUrl: './efab-button.component.html',
  styleUrls: ['./efab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EFabButtonComponent extends ButtonBase {
  @Input() color: FabColor;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-efab],a[fafnEfab]',
  templateUrl: './efab-button.component.html',
  styleUrls: ['./efab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EFabAnchorComponent extends AnchorBase {
  @Input() color: FabColor;

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
