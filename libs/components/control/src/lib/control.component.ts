import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-control,[fafnControl]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ControlComponent {}
