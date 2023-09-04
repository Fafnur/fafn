import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective } from '@fafn/components';

import { DialogFullscreenDirective } from './dialog-fullscreen.directive';

@Component({
  selector: 'fafn-dialog,[fafnDialog]',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-dialog',
  },
  hostDirectives: [
    {
      directive: DialogFullscreenDirective,
      inputs: ['fullscreen'],
    },
    {
      directive: AlignDirective,
      inputs: ['align'],
    },
  ],
})
export class DialogComponent {}
