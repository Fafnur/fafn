import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-avatar',
  template: '<ng-content></ng-content>',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-avatar',
  },
})
export class AvatarComponent {}
