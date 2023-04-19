import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RowComponent {}
