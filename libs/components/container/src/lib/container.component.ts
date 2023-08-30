import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FluidDirective } from './fluid.directive';
import { MobileNoGutterDirective } from './mobile-no-gutter.directive';

@Component({
  selector: 'fafn-container',
  template: '<ng-content></ng-content>',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [
    {
      directive: FluidDirective,
      inputs: ['fluid'],
    },
    {
      directive: MobileNoGutterDirective,
      inputs: ['mobile-no-gutter'],
    },
  ],
})
export class ContainerComponent {}
