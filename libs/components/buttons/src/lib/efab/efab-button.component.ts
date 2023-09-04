import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { ColorDirective, LowerDirective } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-efab],button[fafnEfab]',
  templateUrl: './efab-button.component.html',
  styleUrls: ['./efab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-efab',
  },
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color'],
    },
    {
      directive: LowerDirective,
      inputs: ['lower'],
    },
  ],
})
export class EFabButtonComponent extends ButtonBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-efab],button[fafnEfab]',
  templateUrl: './efab-button.component.html',
  styleUrls: ['./efab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-efab',
  },
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color'],
    },
    {
      directive: LowerDirective,
      inputs: ['lower'],
    },
  ],
})
export class EFabAnchorComponent extends AnchorBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
