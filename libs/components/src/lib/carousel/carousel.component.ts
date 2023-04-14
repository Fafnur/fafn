import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CarouselSlide } from './carousel.interface';
import { CarouselDotsComponent } from './carousel-dots/carousel-dots.component';
import { CarouselNavsComponent } from './carousel-navs/carousel-navs.component';
import { CarouselSlideComponent } from './carousel-slide/carousel-slide.component';

@Component({
  selector: 'fafn-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CarouselSlideComponent, CarouselDotsComponent, CarouselNavsComponent, NgIf, NgForOf],
})
export class CarouselComponent {
  @Input() set data(slides: CarouselSlide[] | null) {
    if (slides) {
      this.slides = slides;
      this.active = 0;
    }
  }

  @Output() selected = new EventEmitter<number>();
  @Output() clicked = new EventEmitter<CarouselSlide>();

  active = 0;
  slides: CarouselSlide[] = [];

  onClicked(slide: CarouselSlide): void {
    this.clicked.emit(slide);
  }

  onSelected(index: number): void {
    this.active = index;
    this.selected.emit(index);
  }

  onPrev(): void {
    this.active = this.active === 0 ? this.slides.length - 1 : this.active - 1;
  }

  onNext(): void {
    this.active = this.active === this.slides.length - 1 ? 0 : this.active + 1;
  }

  trackByFn(index: number, slide: CarouselSlide): string {
    return slide.uuid.toString();
  }
}
