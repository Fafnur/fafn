import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-control-container,[fafnControlContainer]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./control-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ControlContainerComponent {}
