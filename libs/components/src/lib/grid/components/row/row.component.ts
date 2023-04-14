import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fafn-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RowComponent {
  @Input() noPadding = false;

  @HostBinding('class.no-padding') get isNoPadding(): boolean {
    return this.noPadding;
  }
}
