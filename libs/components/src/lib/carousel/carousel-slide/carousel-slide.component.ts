import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CarouselSlide } from '../carousel.interface';

@Component({
  selector: 'fafn-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgStyle],
})
export class CarouselSlideComponent {
  @Input() slide!: CarouselSlide;
  @Input() active = false;
  @Output() clicked = new EventEmitter<CarouselSlide>();

  onClick(): void {
    this.clicked.emit(this.slide);
  }

  get ngStyle(): { backgroundImage: string } | undefined {
    if (!this.slide.image?.length) {
      return;
    }

    return { backgroundImage: `url(${this.slide.image})` };
  }
}
