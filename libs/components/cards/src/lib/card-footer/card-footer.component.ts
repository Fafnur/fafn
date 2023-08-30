import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-card-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-card-footer',
  },
})
export class CardFooterComponent {}
