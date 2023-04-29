import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-dialog-body',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dialog-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogBodyComponent {}
