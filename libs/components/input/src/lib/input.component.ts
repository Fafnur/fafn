import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';

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
export class InputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  private readonly changed$ = new ReplaySubject<string | null>(1);

  readonly valueChanges$: Observable<string | null> = this.changed$.asObservable();

  private onTouched!: () => void;
  private onChanged!: (value: string | null) => void;

  private onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.onChanged(target.value);
    this.changed$.next(target.value);
  };

  constructor(private readonly render: Renderer2, public readonly elementRef: ElementRef<HTMLInputElement>) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener('input', this.onInput);
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.removeEventListener('input', this.onInput);
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChanged = fn;
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
      this.render.setProperty(this.elementRef.nativeElement, 'value', value.toString());
      this.changed$.next(value.toString());
    } else {
      this.render.setProperty(this.elementRef.nativeElement, 'value', '');
      this.changed$.next(null);
    }
  }
}
