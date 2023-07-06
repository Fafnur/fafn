import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'fafn-control-input,[fafnControlInput]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./control-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ControlInputComponent {
  constructor(public readonly elementRef: ElementRef<HTMLDivElement>) {}
}
