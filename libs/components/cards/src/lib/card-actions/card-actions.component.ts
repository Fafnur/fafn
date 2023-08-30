import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective } from '@fafn/components';

@Component({
  selector: 'fafn-card-actions',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-card-actions',
  },
  hostDirectives: [
    {
      directive: AlignDirective,
      inputs: ['align'],
    },
  ],
})
export class CardActionsComponent {}
