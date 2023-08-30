import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CanDisable, CardMode } from '@fafn/components';

@Component({
  selector: 'fafn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-card',
  },
})
export class CardComponent implements CanDisable {
  @Input() mode: CardMode;

  private isDisabled = false;

  get disabled(): boolean {
    return this.isDisabled;
  }

  set disabled(value: string | boolean | null | undefined) {
    const disabled = coerceBooleanProperty(value);
    if (disabled !== this.isDisabled) {
      this.isDisabled = disabled;
    }
  }
}
