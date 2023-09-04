import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SizeDirective } from '@fafn/components';

@Component({
  selector: 'fafn-tag',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-tag',
  },
  hostDirectives: [
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
  ],
})
export class TagComponent {}
