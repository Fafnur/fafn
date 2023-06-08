import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Optional, Renderer2, Self, SkipSelf } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'fafn-input,input[fafnInput]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  private onTouched!: () => void;
  private onChange!: (value: boolean | null) => void;

  constructor(
    private readonly render: Renderer2,
    private readonly elementRef: ElementRef<HTMLInputElement>,
    @SkipSelf() @Optional() public ngControl: NgControl
  ) {}

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

  writeValue(value: unknown): void {
    if (value) {
      this.render.setAttribute(this.elementRef.nativeElement, 'value', value.toString());
    }
  }
}
