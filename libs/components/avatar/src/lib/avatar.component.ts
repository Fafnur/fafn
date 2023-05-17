import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-avatar,[fafnAvatar]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AvatarComponent {}
