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
import { FormControlStatus } from '@angular/forms';
import { startWith, tap } from 'rxjs';

import { FafnLabel } from '@fafn/components/label';

import { ControlContainerComponent } from '../control-container/control-container.component';
import { ControlInputComponent } from '../control-input/control-input.component';
import { InputDirective } from './input.directive';

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
  @ContentChild(InputDirective) control: InputDirective | undefined;

  private isDisabled = false;

  constructor(
    private readonly renderer: Renderer2,
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly destroyRef: DestroyRef,
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
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe();

      this.control.ngControl.statusChanges
        ?.pipe(
          startWith(this.control.ngControl.status),
          tap((status: FormControlStatus) => {
            this.isDisabled = status === 'DISABLED';
            this.disable();
          }),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe();
    } else {
      console.warn('Input[fafnInput] not found. Add child <input fafnInput /> in <fafn-input></fafn-input>');
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
    if (!this.isDisabled) {
      this.renderer.addClass(this.elementRef.nativeElement, 'is-pressed');
    }
  };

  private focusout = () => {
    if (!this.isDisabled) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'is-pressed');
    }
  };

  private input = (event: Event | { target: HTMLInputElement }) => {
    if (!this.isDisabled) {
      const target = event.target as HTMLInputElement;

      if (target.value?.length > 0) {
        this.renderer.addClass(this.elementRef.nativeElement, 'is-value');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'is-value');
      }
    }
  };

  private disable(): void {
    if (this.isDisabled) {
      this.renderer.addClass(this.elementRef.nativeElement, 'is-disabled');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'is-disabled');
    }
  }
}
