import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'fafn-label,label[fafnLabel]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-label',
  },
})
export class LabelComponent {
  constructor(public readonly elementRef: ElementRef<HTMLLabelElement>) {}
}
