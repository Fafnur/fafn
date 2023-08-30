import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective } from '@fafn/components';

@Component({
  selector: 'fafn-dialog-actions',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dialog-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-dialog-actions',
  },
  hostDirectives: [
    {
      directive: AlignDirective,
      inputs: ['align'],
    },
  ],
})
export class DialogActionsComponent {}
