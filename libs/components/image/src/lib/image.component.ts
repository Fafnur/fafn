import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-image,[fafnImage]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-image',
  },
})
export class ImageComponent {}
