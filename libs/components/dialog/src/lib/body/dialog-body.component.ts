import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-dialog-body',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dialog-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-dialog-body',
  },
})
export class DialogBodyComponent {}
