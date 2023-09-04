import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-dialog-icon',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dialog-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-dialog-icon',
  },
})
export class DialogIconComponent {}
