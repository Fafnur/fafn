import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { DisabledDirective, SizeDirective } from '@fafn/components';

import { AnchorBase, ButtonBase } from '../base/button-base';
import { IconInnerDirective } from './icon-inner.directive';
import { IconModeDirective } from './icon-mode.directive';
import { IconSelectedDirective } from './icon-selected.directive';
import { IconToggleDirective } from './icon-toggle.directive';

@Component({
  selector: 'button[fafn-icon-button],button[fafnIconButton]',
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
      directive: IconModeDirective,
      inputs: ['mode'],
    },
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
    {
      directive: IconInnerDirective,
      inputs: ['inner'],
    },
    {
      directive: IconToggleDirective,
      inputs: ['toggle'],
    },
    {
      directive: IconSelectedDirective,
      inputs: ['selected'],
    },
  ],
})
export class IconButtonComponent extends ButtonBase {
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
      directive: IconModeDirective,
      inputs: ['mode'],
    },
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
    {
      directive: IconInnerDirective,
      inputs: ['inner'],
    },
    {
      directive: IconToggleDirective,
      inputs: ['toggle'],
    },
    {
      directive: IconSelectedDirective,
      inputs: ['selected'],
    },
  ],
})
export class IconAnchorComponent extends AnchorBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
