import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-dialog-icon,[fafnDialogIcon]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dialog-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogIconComponent {}
