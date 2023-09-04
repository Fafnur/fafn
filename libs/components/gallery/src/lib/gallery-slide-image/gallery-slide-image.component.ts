import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-gallery-slide-image',
  template: '<ng-content></ng-content>',
  styleUrls: ['./gallery-slide-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-gallery-slide-image',
  },
})
export class GallerySlideImageComponent {}
