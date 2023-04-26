import { ColumnComponent } from './column/column.component';
import { HandsetDirective } from './column/handset.directive';
import { TabletDirective } from './column/tablet.directive';
import { WebDirective } from './column/web.directive';
import { RowComponent } from './row/row.component';

export const GRID = [RowComponent, ColumnComponent, HandsetDirective, TabletDirective, WebDirective];
