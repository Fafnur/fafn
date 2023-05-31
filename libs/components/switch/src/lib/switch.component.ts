import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
})
export class SwitchComponent implements ControlValueAccessor {
  @ViewChild('input', { static: true }) input!: ElementRef<HTMLInputElement>;

  private isDisabled = false;

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
    if (coerceBooleanProperty(value)) {
      this.render.setAttribute(this.input.nativeElement, 'checked', '');
    }
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  onChanged(event: Event): void {
    if (!this.isDisabled) {
      const changed = (event.target as HTMLInputElement).checked;
      this.onChange(changed);
    }
  }
}
