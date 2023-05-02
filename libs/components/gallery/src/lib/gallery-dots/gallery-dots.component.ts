import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { GallerySlide } from '@fafn/components';

@Component({
  selector: 'fafn-gallery-dots,[fafnGalleryDots]',
  templateUrl: './gallery-dots.component.html',
  styleUrls: ['./gallery-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf],
})
export class GalleryDotsComponent {
  @Input() slides: GallerySlide[] = [];
  @Input() active!: number;
  @Output() selected = new EventEmitter<number>();

  onSelect(index: number): void {
    this.selected.emit(index);
  }
}
