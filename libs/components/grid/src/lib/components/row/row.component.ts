import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-row',
  template: '<ng-content></ng-content>',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RowComponent {}
