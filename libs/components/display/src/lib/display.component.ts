import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SizeDirective } from '@fafn/components';

@Component({
  selector: 'fafn-display',
  template: '<ng-content></ng-content>',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-display',
  },
  hostDirectives: [
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
  ],
})
export class DisplayComponent {}
