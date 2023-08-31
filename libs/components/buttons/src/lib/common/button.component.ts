import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

import { DisabledDirective, ExtraSizeDirective, ModeDirective } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-button',
  },
  hostDirectives: [
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
    {
      directive: ModeDirective,
      inputs: ['mode'],
    },
    {
      directive: ExtraSizeDirective,
      inputs: ['size'],
    },
  ],
})
export class ButtonComponent extends ButtonBase {
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
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-button',
  },
  hostDirectives: [
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
    {
      directive: ModeDirective,
      inputs: ['mode'],
    },
    {
      directive: ExtraSizeDirective,
      inputs: ['size'],
    },
  ],
})
export class AnchorComponent extends AnchorBase {
  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
