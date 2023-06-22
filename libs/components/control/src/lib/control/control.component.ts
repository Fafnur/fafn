import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  inject,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { FafnInput } from '@fafn/components/input';
import { FafnLabel } from '@fafn/components/label';

import { ControlContainerComponent } from '../control-container/control-container.component';
import { ControlInputComponent } from '../control-input/control-input.component';
import { Subject, takeUntil, tap } from 'rxjs';

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
  @ViewChild(ControlInputComponent, { static: true }) controlInput!: ControlInputComponent;

  private readonly destroy$ = new Subject<void>();

  private focusin = () => {
    this.renderer.addClass(this.elementRef.nativeElement, 'is-pressed');
  };

  private focusout = () => {
    this.renderer.removeClass(this.elementRef.nativeElement, 'is-pressed');
  };

  constructor(private readonly renderer: Renderer2, private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (this.control) {
      this.control.valueChanges$
        .pipe(
          tap((value) => {
            if (value) {
              this.renderer.addClass(this.elementRef.nativeElement, 'is-value');
            } else {
              this.renderer.removeClass(this.elementRef.nativeElement, 'is-value');
            }
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();

      this.control.elementRef.nativeElement.addEventListener('click', this.focusin);
      this.control.elementRef.nativeElement.addEventListener('focusout', this.focusout);
    } else {
      console.warn('Input[fafnInput] not found. Add child <input fafnInput /> in <fafn-control></fafn-control>');
    }
  }

  ngOnDestroy(): void {
    if (this.control) {
      this.control.elementRef.nativeElement.removeEventListener('click', this.focusin);
      this.control.elementRef.nativeElement.removeEventListener('focusout', this.focusout);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
