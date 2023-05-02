import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-dialog,[fafnDialog]',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogComponent {}
