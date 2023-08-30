import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { GallerySlide } from '@fafn/components';

@Component({
  selector: 'fafn-gallery-dots',
  templateUrl: './gallery-dots.component.html',
  styleUrls: ['./gallery-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-gallery-dots',
  },
})
export class GalleryDotsComponent {
  @Input() slides: GallerySlide[] = [];
  @Input() active!: number;
  @Output() selected = new EventEmitter<number>();

  onSelect(index: number): void {
    this.selected.emit(index);
  }
}
