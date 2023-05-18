import { ChangeDetectionStrategy, Component, ContentChildren, forwardRef, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'fafn-radio-group,[fafnRadioGroup]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./radio-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
})
export class RadioGroupComponent {
  @ContentChildren(forwardRef(() => RadioComponent), { descendants: true }) radios!: QueryList<RadioComponent>;
}
