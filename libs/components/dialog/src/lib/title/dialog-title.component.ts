import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-dialog-title',
  templateUrl: './dialog-title.component.html',
  styleUrls: ['./dialog-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogTitleComponent {}
