import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InsetDirective } from './inset.directive';
import { MiddleInsetDirective } from './middle-inset.directive';

@Component({
  selector: 'fafn-divider',
  template: '<ng-content></ng-content>',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-divider',
  },
  hostDirectives: [
    {
      directive: InsetDirective,
      inputs: ['inset'],
    },
    {
      directive: MiddleInsetDirective,
      inputs: ['middle-inset'],
    },
  ],
})
export class DividerComponent {}
