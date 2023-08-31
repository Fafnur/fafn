import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DisabledDirective, ShortModeDirective } from '@fafn/components';

@Component({
  selector: 'fafn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-card',
  },
  hostDirectives: [
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
    {
      directive: ShortModeDirective,
      inputs: ['mode'],
    },
  ],
})
export class CardComponent {}
