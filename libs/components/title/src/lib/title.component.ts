import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SizeDirective } from '@fafn/components';

/**
 * Title/Subhead
 */
@Component({
  selector: 'fafn-title',
  template: '<ng-content></ng-content>',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
  ],
})
export class TitleComponent {}
