import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SvgIconDirective } from './svg-icon.directive';
import { WithColorsDirective } from './with-colors.directive';

@Component({
  selector: 'fafn-icon, [fafnIcon]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-icon',
  },
  hostDirectives: [
    {
      directive: WithColorsDirective,
      inputs: ['with-colors'],
    },
    {
      directive: SvgIconDirective,
      inputs: ['icon'],
    },
  ],
})
export class IconComponent {}
