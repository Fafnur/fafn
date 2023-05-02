import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { GallerySlide } from '@fafn/components';

import { GalleryDotsComponent } from './gallery-dots/gallery-dots.component';
import { GalleryNavsComponent } from './gallery-navs/gallery-navs.component';
import { GallerySlideComponent } from './gallery-slide/gallery-slide.component';

@Component({
  selector: 'fafn-gallery,[fafnGallery]',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [GallerySlideComponent, GalleryDotsComponent, GalleryNavsComponent, NgIf, NgForOf],
})
export class GalleryComponent {
  @Input() set slides(slides: GallerySlide[] | null | undefined) {
    if (slides) {
      this.gallerySlides = slides;
      this.active = 0;
    }
  }

  @Output() selected = new EventEmitter<number>();
  @Output() clicked = new EventEmitter<GallerySlide>();

  active = 0;
  gallerySlides: GallerySlide[] = [];

  onClicked(slide: GallerySlide): void {
    this.clicked.emit(slide);
  }

  onSelected(index: number): void {
    this.active = index;
    this.selected.emit(index);
  }

  onPrev(): void {
    this.active = this.active === 0 ? this.gallerySlides.length - 1 : this.active - 1;
  }

  onNext(): void {
    this.active = this.active === this.gallerySlides.length - 1 ? 0 : this.active + 1;
  }

  trackByFn(index: number, slide: GallerySlide): string {
    return slide.uuid.toString();
  }
}
