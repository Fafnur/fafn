import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-control-input,[fafnControlInput]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./control-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ControlInputComponent {}
