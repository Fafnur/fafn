import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'fafn-column',
  template: '<ng-content></ng-content>',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ColumnComponent {
  @Input() handset?: string | number;
  @Input() tablet?: string | number;
  @Input() web?: string | number;

  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('handset-offset') handsetOffset?: string | number;
  @Input('tablet-offset') tabletOffset?: string | number;
  @Input('web-offset') webOffset?: string | number;
  @Input('no-gutter') noGutter?: never;
  /* eslint-enable @angular-eslint/no-input-rename */
}
