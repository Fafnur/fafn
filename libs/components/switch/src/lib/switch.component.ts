import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FafnIcon } from '@fafn/components/icon';

@Component({
  selector:
    // eslint-disable-next-line max-len
    'fafn-switch[formControl],[fafnSwitch][formControl],fafn-switch[formControlName],[fafnSwitch][formControlName],fafn-switch[ngModel],[fafnSwitch][ngModel]',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
  imports: [FafnIcon, NgIf],
  animations: [
    trigger('checked', [
      state(
        'on',
        style({
          transform: 'translateX(32px)',
        })
      ),
      state(
        'off',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('off => on', [
        animate(
          '0.2s',
          keyframes([
            style({ height: '16px', width: '16px', offset: 0 }),
            style({ transform: 'translateX(0)', height: '28px', width: '28px', offset: 0.1 }),
            style({ height: '28px', width: '28px', offset: 0.9 }),
            style({ transform: 'translateX(32px)', height: '16px', width: '16px', offset: 1 }),
          ])
        ),
      ]),
      transition('on => off', [
        animate(
          '0.2s',
          keyframes([
            style({ height: '16px', width: '16px', offset: 0 }),
            style({ transform: 'translateX(32px)', height: '28px', width: '28px', offset: 0.1 }),
            style({ height: '28px', width: '28px', offset: 0.9 }),
            style({ transform: 'translateX(0)', height: '16px', width: '16px', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() icons = false;

  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;

  private isDisabled = false;

  checked = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: boolean | null) => void = () => {};

  constructor(private readonly render: Renderer2, private readonly elementRef: ElementRef) {}

  registerOnChange(fn: (value: boolean | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;

    if (this.isDisabled) {
      this.render.setAttribute(this.input.nativeElement, 'disabled', this.isDisabled.toString());
    } else {
      this.render.removeAttribute(this.input.nativeElement, 'disabled');
    }
  }

  writeValue(value: unknown): void {
    this.checked = coerceBooleanProperty(value);
    if (this.checked) {
      this.render.setAttribute(this.input.nativeElement, 'checked', '');
    }
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  onChanged(event: Event): void {
    if (!this.isDisabled) {
      this.checked = (event.target as HTMLInputElement).checked;
      this.onChange(this.checked);
    }
  }
}
