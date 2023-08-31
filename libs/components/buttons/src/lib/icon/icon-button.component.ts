import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';

import { DisabledDirective, ModeDirective, SizeDirective } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';
import { IconNoContentDirective } from './icon-no-content.directive';

@Component({
  selector: 'button[fafn-icon-button]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-icon-button',
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
      directive: SizeDirective,
      inputs: ['size'],
    },
    {
      directive: IconNoContentDirective,
      inputs: ['no-content'],
    },
  ],
})
export class IconButtonComponent extends ButtonBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  selector: 'a[fafn-icon-button]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-icon-button',
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
      directive: SizeDirective,
      inputs: ['size'],
    },
    {
      directive: IconNoContentDirective,
      inputs: ['no-content'],
    },
  ],
})
export class IconAnchorComponent extends AnchorBase {
  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
  }
}
