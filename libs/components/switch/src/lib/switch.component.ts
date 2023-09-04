import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FafnIcon } from '@fafn/components/icon';

@Component({
  selector: 'fafn-switch[formControl],fafn-switch[formControlName],fafn-switch[ngModel]',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
  animations: [
    trigger('checked', [
      state('on', style({ transform: 'translateX(32px)' })),
      state('off', style({ transform: 'translateX(0)' })),
      transition('off => on', [
        animate(
          '200ms',
          keyframes([
            style({ transform: 'translateX(0)', left: '0px', height: '28px', width: '28px', offset: 0 }),
            style({ transform: 'translateX(32px)', left: '-4px', height: '16px', width: '16px', offset: 1 }),
          ]),
        ),
      ]),
      transition('on => off', [
        animate(
          '200ms',
          keyframes([
            style({ transform: 'translateX(32px)', left: '-12px', height: '28px', width: '28px', offset: 0 }),
            style({ transform: 'translateX(0)', left: '4px', height: '16px', width: '16px', offset: 1 }),
          ]),
        ),
      ]),
    ]),
  ],
  standalone: true,
  imports: [FafnIcon, NgIf, NgClass],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'fafn-switch',
  },
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() icons: 'on' | 'off' | 'on-off' | undefined;

  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;

  icon: string | undefined;

  private onTouched!: () => void;
  private onChange!: (value: boolean | null) => void;

  constructor(private readonly render: Renderer2) {}

  registerOnChange(fn: (value: boolean | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.render.setAttribute(this.input.nativeElement, 'disabled', isDisabled.toString());
    } else {
      this.render.removeAttribute(this.input.nativeElement, 'disabled');
    }
  }

  writeValue(value: unknown): void {
    const checked = coerceBooleanProperty(value);
    if (checked) {
      this.render.setAttribute(this.input.nativeElement, 'checked', '');
    }
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  onChanged(event: Event): void {
    if (!this.input.nativeElement.disabled) {
      this.onChange((event.target as HTMLInputElement).checked);
    }
  }

  onToggled(): void {
    if (this.icons) {
      const checked = this.input.nativeElement.checked;

      if (this.icons === 'on') {
        this.icon = checked ? 'done' : undefined;
      } else if (this.icons === 'off') {
        this.icon = !checked ? 'close' : undefined;
      } else {
        this.icon = checked ? 'done' : 'close';
      }
    }
  }
}
