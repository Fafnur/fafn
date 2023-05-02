import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-gallery-slide-title,[fafnGallerySlideTitle]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./gallery-slide-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GallerySlideTitleComponent {}
