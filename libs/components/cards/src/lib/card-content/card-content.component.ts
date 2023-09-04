import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-card-content',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-card-content',
  },
})
export class CardContentComponent {}
