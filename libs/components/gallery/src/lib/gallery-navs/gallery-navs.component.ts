import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { FafnIconButton } from '@fafn/components/buttons';
import { FafnIcon } from '@fafn/components/icon';

@Component({
  selector: 'fafn-gallery-navs,[fafnGalleryNavs]',
  templateUrl: './gallery-navs.component.html',
  styleUrls: ['./gallery-navs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FafnIcon, FafnIconButton],
})
export class GalleryNavsComponent {
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  onPrev(): void {
    this.prev.emit();
  }

  onNext(): void {
    this.next.emit();
  }
}
