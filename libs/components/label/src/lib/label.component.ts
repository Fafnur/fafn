import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-label,[fafnLabel]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LabelComponent {}
