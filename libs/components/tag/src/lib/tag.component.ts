import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-tag,[fafnTag]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TagComponent {}
