import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

import { CanMode, CanSize, ThemeMode, ThemeSize } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent extends ButtonBase implements CanSize, CanMode {
  @Input() size: ThemeSize;
  @Input() mode: ThemeMode;

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AnchorComponent extends AnchorBase implements CanSize, CanMode {
  @Input() size: ThemeSize;
  @Input() mode: ThemeMode;

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
