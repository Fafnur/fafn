import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { GallerySlide } from '@fafn/components';

import { GallerySlideImageComponent } from '../gallery-slide-image/gallery-slide-image.component';
import { GallerySlideTitleComponent } from '../gallery-slide-title/gallery-slide-title.component';
import { BackgroundImagePipe } from './background-image.pipe';

@Component({
  selector: 'fafn-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrls: ['./gallery-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgStyle, BackgroundImagePipe, GallerySlideTitleComponent, GallerySlideImageComponent],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-gallery-slide',
  },
})
export class GallerySlideComponent {
  @Input() slide!: GallerySlide;
  @Input() active = false;
  @Output() clicked = new EventEmitter<GallerySlide>();

  onClick(): void {
    this.clicked.emit(this.slide);
  }
}
