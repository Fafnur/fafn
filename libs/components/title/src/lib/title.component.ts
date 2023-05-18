import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Title/Subhead
 */
@Component({
  selector: 'fafn-title,[fafnTitle]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TitleComponent {}
