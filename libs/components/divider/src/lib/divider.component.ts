import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-divider,[fafnDivider]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DividerComponent {}
