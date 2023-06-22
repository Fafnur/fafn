import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

import { FafnInput } from '@fafn/components/input';
import { FafnLabel } from '@fafn/components/label';

import { ControlContainerComponent } from '../control-container/control-container.component';
import { ControlInputComponent } from '../control-input/control-input.component';

@Component({
  selector: 'fafn-control,[fafnControl]',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ControlContainerComponent, ControlInputComponent],
})
export class ControlComponent implements AfterViewInit, OnDestroy {
  @ContentChild(FafnLabel) label: FafnLabel | undefined;
  @ContentChild(FafnInput) control: FafnInput | undefined;

  constructor(
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly destroyRef: DestroyRef
  ) {}

  ngAfterViewInit(): void {
    if (this.control) {
      this.control.elementRef.nativeElement.addEventListener('click', this.focusin);
      this.control.elementRef.nativeElement.addEventListener('focusout', this.focusout);
      this.control.elementRef.nativeElement.addEventListener('input', this.input);
      this.input({ target: this.control.elementRef.nativeElement });

      this.control.ngControl.valueChanges
        ?.pipe(
          tap(() => {
            if (!this.control?.ngControl.value && this.elementRef.nativeElement.classList.contains('is-value')) {
              this.renderer.removeClass(this.elementRef.nativeElement, 'is-value');
            }
          }),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe();
    } else {
      console.warn('Input[fafnInput] not found. Add child <input fafnInput /> in <fafn-control></fafn-control>');
    }
  }

  ngOnDestroy(): void {
    if (this.control) {
      this.control.elementRef.nativeElement.removeEventListener('click', this.focusin);
      this.control.elementRef.nativeElement.removeEventListener('focusout', this.focusout);
      this.control.elementRef.nativeElement.removeEventListener('input', this.input);
    }
  }

  private focusin = () => {
    this.renderer.addClass(this.elementRef.nativeElement, 'is-pressed');
  };

  private focusout = () => {
    this.renderer.removeClass(this.elementRef.nativeElement, 'is-pressed');
  };

  private input = (event: Event | { target: HTMLInputElement }) => {
    const target = event.target as HTMLInputElement;

    if (target.value?.length > 0) {
      this.renderer.addClass(this.elementRef.nativeElement, 'is-value');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'is-value');
    }
  };
}
