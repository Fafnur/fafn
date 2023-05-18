import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-card-header,[fafnCardHeader]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CardHeaderComponent {}
