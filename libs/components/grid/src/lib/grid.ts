import { ColumnComponent } from './components/column/column.component';
import { RowComponent } from './components/row/row.component';
import { HandsetDirective } from './directives/handset.directive';
import { TabletDirective } from './directives/tablet.directive';
import { WebDirective } from './directives/web.directive';

export const GRID = [RowComponent, ColumnComponent, HandsetDirective, TabletDirective, WebDirective];
