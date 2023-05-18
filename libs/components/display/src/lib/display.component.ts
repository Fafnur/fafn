import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-display,[fafnDisplay]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DisplayComponent {}
