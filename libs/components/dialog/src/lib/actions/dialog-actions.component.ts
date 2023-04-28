import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fafn-dialog-actions',
  templateUrl: './dialog-actions.component.html',
  styleUrls: ['./dialog-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogActionsComponent {
  @Input() align?: string;
}
