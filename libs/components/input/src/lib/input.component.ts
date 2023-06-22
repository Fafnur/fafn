import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'fafn-input,input[fafnInput]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InputComponent {
  constructor(public readonly elementRef: ElementRef<HTMLInputElement>, public readonly ngControl: NgControl) {}
}
