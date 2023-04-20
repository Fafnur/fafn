import { ColumnComponent } from './components/column/column.component';
import { RowComponent } from './components/row/row.component';
import { HandsetDirective } from './directives/handset.directive';
import { HandsetOffsetDirective } from './directives/handset-offset.directive';
import { NoGutterDirective } from './directives/no-gutter.directive';
import { TabletDirective } from './directives/tablet.directive';
import { TabletOffsetDirective } from './directives/tablet-offset.directive';
import { WebDirective } from './directives/web.directive';
import { WebOffsetDirective } from './directives/web-offset.directive';

export const GRID = [
  RowComponent,
  ColumnComponent,
  TabletDirective,
  WebDirective,
  HandsetDirective,
  NoGutterDirective,
  HandsetOffsetDirective,
  TabletOffsetDirective,
  WebOffsetDirective,
];
