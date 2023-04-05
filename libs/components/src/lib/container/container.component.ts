import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fafn-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  @Input() mode?: 'flex' | 'fluid';

  @HostBinding('class.is-flex') get isFlex(): boolean {
    return this.mode === 'flex';
  }

  @HostBinding('class.is-fluid') get isFluid(): boolean {
    return this.mode === 'fluid';
  }
}
