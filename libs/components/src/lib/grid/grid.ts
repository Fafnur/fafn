import { ColumnComponent } from './components/column/column.component';
import { RowComponent } from './components/row/row.component';
import { HandsetDirective } from './directives/handset/handset.directive';
import { TabletDirective } from './directives/tablet/tablet.directive';
import { WebDirective } from './directives/web/web.directive';

export const GRID = [RowComponent, ColumnComponent, TabletDirective, WebDirective, HandsetDirective];
