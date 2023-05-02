import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

import { CanMode, CanSizeShort, ThemeMode, ThemeSizeShort } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-icon-button],button[fafnIconButton]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconButtonComponent extends ButtonBase implements CanSizeShort, CanMode {
  @Input() size: ThemeSizeShort;
  @Input() mode: ThemeMode;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-icon-button],a[fafnIconButton]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconAnchorComponent extends AnchorBase implements CanSizeShort, CanMode {
  @Input() size: ThemeSizeShort;
  @Input() mode: ThemeMode;

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
