import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fafn-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {}
