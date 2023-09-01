import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { ColorDirective, LowerDirective, SizeDirective } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  selector: 'button[fafn-fab],button[fafnFab]',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-fab',
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
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
  ],
})
export class FabButtonComponent extends ButtonBase {
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
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-fab',
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
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
  ],
})
export class FabAnchorComponent extends AnchorBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
