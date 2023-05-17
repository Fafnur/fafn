import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-subhead,[fafnSubhead]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./subhead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SubheadComponent {}
