import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fafn-dialog-actions',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dialog-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogActionsComponent {
  @Input() align?: string;
}
