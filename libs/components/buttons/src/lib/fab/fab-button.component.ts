import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

import { CanColor, CanSizeShort, ThemeColor, ThemeSizeShort } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-fab],button[fafnFab]',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FabButtonComponent extends ButtonBase implements CanColor, CanSizeShort {
  @Input() color: ThemeColor;
  @Input() size: ThemeSizeShort;

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
export class FabAnchorComponent extends AnchorBase implements CanColor, CanSizeShort {
  @Input() color: ThemeColor;
  @Input() size: ThemeSizeShort;

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
