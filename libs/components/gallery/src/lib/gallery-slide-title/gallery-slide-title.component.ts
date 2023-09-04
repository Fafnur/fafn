import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-gallery-slide-title',
  template: '<ng-content></ng-content>',
  styleUrls: ['./gallery-slide-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-gallery-slide-title',
  },
})
export class GallerySlideTitleComponent {}
