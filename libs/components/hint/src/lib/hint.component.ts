import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-hint',
  template: '<ng-content></ng-content>',
  styleUrls: ['./hint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-hint',
  },
})
export class HintComponent {}
