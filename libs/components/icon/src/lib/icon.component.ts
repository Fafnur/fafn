import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fafn-icon',
  template: '<ng-content></ng-content>',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class IconComponent {
  @Input() icon?: string;
}