import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
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
  private onTouched: () => void = () => {};

  private onChange: (value: boolean | null) => void = () => {};

  constructor(private readonly render: Renderer2, private readonly elementRef: ElementRef) {}

  registerOnChange(fn: (value: boolean | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.render.setAttribute(this.elementRef.nativeElement, 'disabled', isDisabled.toString());
    } else {
      this.render.removeAttribute(this.elementRef.nativeElement, 'disabled');
    }
  }

  writeValue(obj: boolean | null): void {}

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }
}
