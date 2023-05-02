import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-gallery-slide-image,[fafnGallerySlideImage]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./gallery-slide-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GallerySlideImageComponent {}
