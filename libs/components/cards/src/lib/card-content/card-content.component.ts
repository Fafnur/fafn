import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-card-content,[fafnCardContent]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CardContentComponent {}
