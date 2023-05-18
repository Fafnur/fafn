import { BooleanInput } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'fafn-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RadioComponent {
  labelPosition = '';
  @Input({ required: true }) value!: unknown;
  @Input() disabled!: boolean;

  @Input() id = `fafn-radio-${++nextUniqueId}`;

  @ViewChild('input') inputElement!: ElementRef<HTMLInputElement>;

  // @Input() get required(): boolean {
  //   return this._required;
  // }
  //
  // set required(value: BooleanInput) {
  //   this._required = coerceBooleanProperty(value);
  //   this._markRadiosForCheck();
  // }

  onFocused() {
    this.inputElement.nativeElement.focus();
  }

  onInputInteraction(event: Event) {
    event.stopPropagation();

    // if (!this.checked && !this.disabled) {
    //   const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
    //   this.checked = true;
    //   this._emitChangeEvent();
    //
    //   if (this.radioGroup) {
    //     this.radioGroup._controlValueAccessorChangeFn(this.value);
    //     if (groupValueChanged) {
    //       this.radioGroup._emitChangeEvent();
    //     }
    //   }
    // }
  }

  onTouchTargetClick(event: Event) {
    this.onInputInteraction(event);

    if (!this.disabled) {
      this.inputElement.nativeElement.focus();
    }
  }
}
