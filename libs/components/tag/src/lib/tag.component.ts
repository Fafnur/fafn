import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SizeDirective } from '@fafn/components';

@Component({
  selector: 'fafn-tag,[fafnTag]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
  ],
})
export class TagComponent {}
