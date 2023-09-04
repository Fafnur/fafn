import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-card-header',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-card-header',
  },
})
export class CardHeaderComponent {}
