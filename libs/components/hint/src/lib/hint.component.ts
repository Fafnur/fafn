import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-hint,[fafnHint]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./hint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HintComponent {}
