import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

import { FabColor, IconSize } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-fab],button[fafnFab]',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FabButtonComponent extends ButtonBase {
  @Input() color: FabColor;
  @Input() size: IconSize;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-fab],a[fafnFab]',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FabAnchorComponent extends AnchorBase {
  @Input() color: FabColor;
  @Input() size: IconSize;

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
